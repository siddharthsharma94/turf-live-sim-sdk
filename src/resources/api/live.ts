// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Live extends APIResource {
  /**
   * Returns the current status of a specific game
   */
  getGameStatus(gameID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/live/${gameID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the current status of all active games
   */
  getStatus(options?: RequestOptions): APIPromise<LiveGetStatusResponse> {
    return this._client.get('/api/live', options);
  }
}

export interface LiveGetStatusResponse {
  count?: number;

  games?: Array<unknown>;
}

export declare namespace Live {
  export { type LiveGetStatusResponse as LiveGetStatusResponse };
}
