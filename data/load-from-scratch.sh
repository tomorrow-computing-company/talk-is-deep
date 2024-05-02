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
unzip arxiv.zip

# load data into qdrant
python3 prepare.py

