## data

- This project relies on arxiv abstracts to seed the first turn of each conversation.
- This folder contains the scripts necessary to load the arxiv data into qdrant, and to run a local qdrant server for making these abstracts available to application code.

### why

- Because each conversation is seeded with an arxiv abstract, we need a way to sample diverse abstracts from the arxiv dataset
- There are many methods for doing so, but utilizing embeddings allows us 1. fast search and 2. the ability to sample diverse abstracts by computing vector dissimilarity from conversation to conversation
- Once an abstract is selected, the embeddings for that selection are passed into the next query to weight the next selection, along with some random vectors, ensuring a diverse set of abstracts are selected for conversation inspiration
- This process is repeated every turn until the total dataset is generated.

### how

This app can be run with node scripts in the package.json file

- To load the data from scratch for the first time, run `yarn load-from-scratch`
- To run the qdrant server subsequent times, run `yarn run-qdrant`

