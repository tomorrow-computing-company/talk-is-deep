# installs qdrant and loads data into it from scratch

echo "This will erase any previously saved db and re-load the data in a fresh qdrant instance."
read -p "Are you sure you want to proceed? (y/N): " confirm
if [ "$confirm" != "y" ]; then
  echo "Exiting without making changes."
  exit 0
fi

# install qdrant
docker pull qdrant/qdrant

# run qdrant
docker rm -f deeptalk 2>/dev/null || true
docker run -d --name deeptalk -p 6333:6333 -v $(pwd)/data:/data qdrant/qdrant
# install dependencies
poetry install

# download data
poetry run kaggle datasets download -d Cornell-University/arxiv

# unzip data
sudo apt-get install zip unzip
unzip arxiv.zip

# load data into qdrant
poetry run python prepare.py

# remove zip
rm arxiv.zip

