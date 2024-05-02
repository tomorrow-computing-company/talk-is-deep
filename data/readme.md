## data

- This project relies on arxiv abstracts to seed the first turn of each conversation.
- This folder contains the scripts necessary to load the arxiv data into qdrant, and to run a local qdrant server for making these abstracts available to application code.

## how

- To load the data from scratch for the first time, run `yarn load-data`
- To run the qdrant server subsequent times, run `yarn run-qdrant`

## why

- Because each conversation is seeded with an arxiv abstract, and there are 2.5 million of them, we need a way to ensure diverse sampling (and thus diverse conversational data)
- There are many methods for doing so, but utilizing embeddings allows us 1. fast search and 2. the ability to sample diverse abstracts by computing vector dissimilarity from conversation to conversation
- Once an abstract is selected, the embeddings for that abstract are passed into the next query to weight the next selection, along with some random vectors, so the next abstract is likely to be different from the last
- This process is repeated every turn until the total dataset is generated.

## manual installation

If the above scripts don't work for some environment-related reason, you can debug the steps manually:

```bash
# installs qdrant and loads data into it from scratch

# install qdrant
docker pull qdrant/qdrant

# run qdrant
docker run -d --name qdrant -p 6333:6333 -v $(pwd)/data:/data qdrant/qdrant

# load data from https://www.kaggle.com/datasets/Cornell-University/arxiv/data
# install kaggle
pip install kaggle

# download data
kaggle datasets download -d Cornell-University/arxiv

# unzip data
sudo apt-get install zip unzip
unzip arxiv.zip

# load data into qdrant
pip install -r requirements.txt
python3 prepare.py

# remove zip
rm arxiv.zip

```



