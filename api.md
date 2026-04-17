# Images

Types:

- <code><a href="./src/resources/images.ts">Usage</a></code>
- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /v2/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageGenerateResponse</code>

# Videos

## Generations

Types:

- <code><a href="./src/resources/videos/generations.ts">GenerationCreateResponse</a></code>
- <code><a href="./src/resources/videos/generations.ts">GenerationRetrieveResponse</a></code>

Methods:

- <code title="post /v2/videos/generations">client.videos.generations.<a href="./src/resources/videos/generations.ts">create</a>({ ...params }) -> GenerationCreateResponse</code>
- <code title="get /v2/videos/generations/{id}">client.videos.generations.<a href="./src/resources/videos/generations.ts">retrieve</a>(id) -> GenerationRetrieveResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
