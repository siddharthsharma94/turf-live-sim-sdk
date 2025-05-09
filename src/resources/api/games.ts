// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Games extends APIResource {
  /**
   * Creates a new game instance from a game ID
   */
  create(body: GameCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/games/create', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/x-www-form-urlencoded', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the details of a specific game instance
   */
  retrieve(gameID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/games/${gameID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of all active game instances
   */
  list(options?: RequestOptions): APIPromise<GameListResponse> {
    return this._client.get('/api/games', options);
  }

  /**
   * Deletes a specific game instance
   */
  delete(
    gameID: string,
    params: GameDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Accept } = params ?? {};
    return this._client.post(path`/api/games/${gameID}/delete`, {
      ...options,
      headers: buildHeaders([{ ...(Accept != null ? { Accept: Accept } : undefined) }, options?.headers]),
    });
  }

  /**
   * Sets the current snapshot index for a specific game
   */
  setSnapshot(gameID: string, query: GameSetSnapshotParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/games/${gameID}/set`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Starts the simulation for a specific game instance
   */
  startSimulation(
    gameID: string,
    query: GameStartSimulationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/games/${gameID}/start`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stops the simulation for a specific game instance
   */
  stopSimulation(gameID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/games/${gameID}/stop`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type GameListResponse = Array<GameListResponse.GameListResponseItem>;

export namespace GameListResponse {
  export interface GameListResponseItem {
    id?: string;

    created_at?: string;

    current_snapshot_index?: number;

    display_name?: string;

    game_id?: string;

    is_running?: boolean;

    last_updated?: string;

    speed_factor?: number;
  }
}

export interface GameCreateParams {
  /**
   * Game ID to create an instance for
   */
  game_id: string;

  /**
   * Display name for the game
   */
  display_name?: string;
}

export interface GameDeleteParams {
  /**
   * Set to 'application/json' to get a JSON response
   */
  Accept?: string;
}

export interface GameSetSnapshotParams {
  index: number;
}

export interface GameStartSimulationParams {
  speed_factor?: number;

  start_index?: number;
}

export declare namespace Games {
  export {
    type GameListResponse as GameListResponse,
    type GameCreateParams as GameCreateParams,
    type GameDeleteParams as GameDeleteParams,
    type GameSetSnapshotParams as GameSetSnapshotParams,
    type GameStartSimulationParams as GameStartSimulationParams,
  };
}
