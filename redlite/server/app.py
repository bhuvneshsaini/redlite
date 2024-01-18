import json
import os
from collections.abc import Iterator
from aiohttp import web
import aiohttp_cors
from redlite.server import res
from redlite.util import redlite_data_dir


class RunReader:
    def __init__(self, base: str):
        self.base = base

    async def runs(self) -> list[dict]:
        return list(read_runs(self.base))

    async def data(self, name: str) -> list[dict]:
        return list(read_data(self.base, name))

    async def meta(self, name: str) -> dict:
        return read_meta(self.base, name)


class Service:
    def __init__(self, reader: RunReader):
        self.reader = reader

    async def runs(self, request):
        runs = await self.reader.runs()
        return web.json_response(runs)

    async def data(self, request):
        name = request.match_info["name"]
        data = await self.reader.data(name)
        return web.json_response(data)

    async def meta(self, request):
        name = request.match_info["name"]
        meta = await self.reader.meta(name)
        return web.json_response(meta)


def read_runs(base: str) -> Iterator[dict]:
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


def read_data(base: str, name) -> Iterator[dict]:
    meta_name = os.path.join(base, name, "meta.json")
    if not os.path.isfile(meta_name):
        return

    data_name = os.path.join(base, name, "data.jsonl")
    if not os.path.isfile(data_name):
        return

    with open(data_name, "r", encoding="utf-8") as f:
        for line in f:
            yield json.loads(line)


def read_meta(base: str, name) -> dict:
    meta_name = os.path.join(base, name, "meta.json")
    if not os.path.isfile(meta_name):
        raise FileNotFoundError()

    data_name = os.path.join(base, name, "data.jsonl")
    if not os.path.isfile(data_name):
        raise FileNotFoundError()

    with open(meta_name, "r", encoding="utf-8") as f:
        return json.load(f)


async def index(request):
    return web.FileResponse(res("build", "index.html"))


def get_app(reader: RunReader):
    app = web.Application()
    service = Service(reader)
    app.add_routes(
        [
            web.get("/api/runs", service.runs),
            web.get("/api/runs/{name}/meta", service.meta),
            web.get("/api/runs/{name}/data", service.data),
            web.get("/", index),
            web.static("/", res("build")),
        ]
    )

    cors = aiohttp_cors.setup(
        app,
        defaults={
            "*": aiohttp_cors.ResourceOptions(
                allow_credentials=True, expose_headers="*", allow_headers="*"
            )
        },
    )
    for route in list(app.router.routes()):
        cors.add(route)

    return app


def main(port: int = 8000):
    base = redlite_data_dir()

    app = get_app(RunReader(base))

    web.run_app(app, port=port)


if __name__ == "__main__":
    main()
