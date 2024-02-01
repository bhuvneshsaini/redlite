import hashlib
import json
import os
import math
from collections.abc import Iterable, Iterator, Sized
from .core import NamedDataset, DatasetItem, ScoreSummary

__all__ = [
    "DatasetRunningDigest",
    "parse_duration",
    "format_duration",
    "redlite_data_dir",
]
__docformat__ = "google"


def _serialize(obj: dict | DatasetItem) -> bytes:
    return json.dumps(obj, ensure_ascii=False, sort_keys=True).encode("utf-8")


class DatasetRunningDigest(Sized, Iterable[DatasetItem]):
    """Helper object to compute data digest."""

    def __init__(self, dataset: NamedDataset, **kw):
        self._hash = hashlib.sha256(usedforsecurity=False)
        self._hash.update(_serialize(kw))
        self._dataset = dataset

    def __iter__(self) -> Iterator[DatasetItem]:
        for item in self._dataset:
            yield item
            self._hash.update(
                _serialize({"id": item["id"], "messages": item["messages"], "expected": item["expected"]})
            )

    def __len__(self):
        return len(self._dataset)

    @property
    def hexdigest(self) -> str:
        return self._hash.hexdigest()


def format_duration(seconds: float) -> str:
    """Formats duration to a compact human-readable string, e.g. "1d 4h 27m 14.5s".

    Args:
        seconds (float): Time duration in seconds.

    Returns:
        str: The same duration as a human-readable value, for example "1d 4h 27m 14.5s".
    """

    out = []
    minutes = math.floor(seconds // 60)
    seconds -= minutes * 60
    out.append(f"{round(seconds, 2)}s")
    if minutes > 0:
        hours = minutes // 60
        minutes -= hours * 60
        out.append(f"{minutes}m")
        if hours > 0:
            days = hours // 24
            hours -= days * 24
            out.append(f"{hours}h")
            if days > 0:
                out.append(f"{days}d")
    return " ".join(reversed(out))


def parse_duration(duration: str) -> float:
    """Parses human-readable duration into float number, representing seconds.

    Args:
        duration (str): String representing duration, for example: "1h 24m 33s".

    Returns:
        float: The same duration in seconds.
    """
    seconds = 0.0
    minutes = 0
    hours = 0
    days = 0
    for x in reversed(duration.split()):
        if x[-1] == "s":
            seconds = float(x[:-1])
        elif x[-1] == "m":
            minutes = int(x[:-1])
        elif x[-1] == "h":
            hours = int(x[:-1])
        elif x[-1] == "d":
            days = int(x[:-1])
        else:
            raise ValueError(f"Invalid duration string: [{duration}]")
    return seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60


def redlite_data_dir() -> str:
    """Returns the location of RedLite data directory.

    Returns:
        str: Location of the RedLite data.
    """
    return os.environ.get("REDLITE_DATA_DIR", os.path.expanduser("~/.cache/redlite"))


class ScoreAccumulator:
    """Helper object that computes metric statistics"""

    def __init__(self):
        self._min = 100000  # FIXME?
        self._max = 0.0
        self._acc = 0.0
        self._count = 0

    def __call__(self, score: float) -> None:
        """Adds another score to the statistics.

        Args:
            score (float): Score data point.
        """
        self._acc += score
        self._min = min(self._min, score)
        self._max = max(self._max, score)
        self._count += 1

    @property
    def summary(self) -> ScoreSummary:
        """Computes and returns statistics.

        Returns:
            Dictionary containing `count`, `mean`, `min`, and `max` values.
        """
        mean = 0.0 if self._count == 0 else self._acc / self._count
        return dict(
            count=self._count,
            mean=mean,
            min=self._min,
            max=self._max,
        )


def read_runs(base: str) -> Iterator[dict]:
    """Iterator that reads all runs' metadata.

    Args:
        base (str): Directory where runs are stored.

    Returns:
        Iterator[dict]: Metadata for each discovered run.
    """
    if not os.path.isdir(base):
        return

    for name in os.listdir(base):
        meta_name = os.path.join(base, name, "meta.json")
        if not os.path.isfile(meta_name):
            continue

        with open(meta_name, encoding="utf-8") as f:
            meta = json.load(f)

        data_name = os.path.join(base, name, "data.jsonl")
        if not os.path.isfile(data_name):
            continue

        yield meta


def read_data(base: str, name: str) -> Iterator[dict]:
    """Iterator that reads run data.

    Args:
        base (str): Directory where runs are stored.
        name (str): Name of the run.

    Returns:
        Iterator[dict]: Dataset items.
    """
    meta_name = os.path.join(base, name, "meta.json")
    if not os.path.isfile(meta_name):
        return

    data_name = os.path.join(base, name, "data.jsonl")
    if not os.path.isfile(data_name):
        return

    with open(data_name, "r", encoding="utf-8") as f:
        for line in f:
            yield json.loads(line)


def read_meta(base: str, name: str) -> dict:
    """Reads run metadata.

    Args:
        base (str): Directory where runs are stored.
        name (str): Name of the run.

    Returns:
        doct: Dictionary containing run metadata.
    """
    meta_name = os.path.join(base, name, "meta.json")
    if not os.path.isfile(meta_name):
        raise FileNotFoundError()

    data_name = os.path.join(base, name, "data.jsonl")
    if not os.path.isfile(data_name):
        raise FileNotFoundError()

    with open(meta_name, "r", encoding="utf-8") as f:
        return json.load(f)
