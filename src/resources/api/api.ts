// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GamesAPI from './games';
import {
  GameCreateParams,
  GameCreateResponse,
  GameDeleteParams,
  GameListResponse,
  GameSetSnapshotParams,
  GameStartSimulationParams,
  Games,
} from './games';
import * as LiveAPI from './live';
import { Live, LiveGetGameStatusResponse, LiveGetStatusResponse, Quarter } from './live';

export class API extends APIResource {
  games: GamesAPI.Games = new GamesAPI.Games(this._client);
  live: LiveAPI.Live = new LiveAPI.Live(this._client);
}

API.Games = Games;
API.Live = Live;

export declare namespace API {
  export {
    Games as Games,
    type GameCreateResponse as GameCreateResponse,
    type GameListResponse as GameListResponse,
    type GameCreateParams as GameCreateParams,
    type GameDeleteParams as GameDeleteParams,
    type GameSetSnapshotParams as GameSetSnapshotParams,
    type GameStartSimulationParams as GameStartSimulationParams,
  };

  export {
    Live as Live,
    type Quarter as Quarter,
    type LiveGetGameStatusResponse as LiveGetGameStatusResponse,
    type LiveGetStatusResponse as LiveGetStatusResponse,
  };
}
