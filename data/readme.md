### qdrant

- navigate to this folder (`data`).
- install qdrant if you havent already

```
docker pull qdrant/qdrant
```

- run qdrant

```
docker run -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage:z \
    qdrant/qdrant
```


