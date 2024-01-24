import os
from redlite import run
from redlite.hf import HFDataset
from redlite.hf.hf_model import HFModel
from redlite.metric import PrefixMetric


model = HFModel("mistralai/Mistral-7B-Instruct-v0.2", token=os.environ["HF_TOKEN"])

dataset = HFDataset("innodatalabs/rt-gaia")
metric = PrefixMetric(ignore_case=True, ignore_punct=True, strip=True)

run(model=model, dataset=dataset, metric=metric)
