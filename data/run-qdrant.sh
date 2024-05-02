#  assuming qdrant is installed and data has been loaded before, just run it
docker run -d --name qdrant -p 6333:6333 -v $(pwd)/data:/data qdrant/qdrant
