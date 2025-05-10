# API

## Games

Types:

- <code><a href="./src/resources/api/games.ts">GameCreateResponse</a></code>
- <code><a href="./src/resources/api/games.ts">GameListResponse</a></code>

Methods:

- <code title="post /api/games/create">client.api.games.<a href="./src/resources/api/games.ts">create</a>({ ...params }) -> GameCreateResponse</code>
- <code title="get /api/games/{game_id}">client.api.games.<a href="./src/resources/api/games.ts">retrieve</a>(gameID) -> void</code>
- <code title="get /api/games">client.api.games.<a href="./src/resources/api/games.ts">list</a>() -> GameListResponse</code>
- <code title="post /api/games/{game_id}/delete">client.api.games.<a href="./src/resources/api/games.ts">delete</a>(gameID, { ...params }) -> void</code>
- <code title="get /api/games/{game_id}/set">client.api.games.<a href="./src/resources/api/games.ts">setSnapshot</a>(gameID, { ...params }) -> void</code>
- <code title="get /api/games/{game_id}/start">client.api.games.<a href="./src/resources/api/games.ts">startSimulation</a>(gameID, { ...params }) -> void</code>
- <code title="get /api/games/{game_id}/stop">client.api.games.<a href="./src/resources/api/games.ts">stopSimulation</a>(gameID) -> void</code>

## Live

Types:

- <code><a href="./src/resources/api/live.ts">Quarter</a></code>
- <code><a href="./src/resources/api/live.ts">LiveGetGameStatusResponse</a></code>
- <code><a href="./src/resources/api/live.ts">LiveGetStatusResponse</a></code>

Methods:

- <code title="get /api/live/{game_id}">client.api.live.<a href="./src/resources/api/live.ts">getGameStatus</a>(gameID) -> LiveGetGameStatusResponse</code>
- <code title="get /api/live">client.api.live.<a href="./src/resources/api/live.ts">getStatus</a>() -> LiveGetStatusResponse</code>
