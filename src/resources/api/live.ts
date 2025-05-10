// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveAPI from './live';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Live extends APIResource {
  /**
   * Returns the current snapshot data for a specific game
   */
  getGameStatus(gameID: string, options?: RequestOptions): APIPromise<LiveGetGameStatusResponse> {
    return this._client.get(path`/api/live/${gameID}`, options);
  }

  /**
   * Returns a list of games with their current snapshot data
   */
  getStatus(options?: RequestOptions): APIPromise<LiveGetStatusResponse> {
    return this._client.get('/api/live', options);
  }
}

export interface Quarter {
  AwayScore?: number;

  GameID?: number;

  HomeScore?: number;

  Name?: string;

  Number?: number;

  QuarterID?: number;
}

export interface LiveGetGameStatusResponse {
  _meta?: LiveGetGameStatusResponse._Meta;

  Game?: LiveGetGameStatusResponse.Game;

  Plays?: Array<LiveGetGameStatusResponse.Play>;

  Quarters?: Array<Quarter>;
}

export namespace LiveGetGameStatusResponse {
  export interface _Meta {
    display_name?: string | null;

    filename?: string;

    game_id?: string;

    is_running?: boolean;

    timestamp?: string;
  }

  export interface Game {
    AlternateID?: number;

    Attendance?: number | null;

    AwayRotationNumber?: number;

    AwayTeam?: string;

    AwayTeamID?: number;

    AwayTeamMoneyLine?: number;

    AwayTeamScore?: number;

    Channel?: string;

    CrewChiefID?: number;

    DateTime?: string;

    DateTimeUTC?: string;

    Day?: string;

    GameEndDateTime?: string | null;

    GameID?: number;

    GlobalAwayTeamID?: number;

    GlobalGameID?: number;

    GlobalHomeTeamID?: number;

    HomeRotationNumber?: number;

    HomeTeam?: string;

    HomeTeamID?: number;

    HomeTeamMoneyLine?: number;

    HomeTeamScore?: number;

    InseasonTournament?: boolean;

    IsClosed?: boolean;

    LastPlay?: string | null;

    NeutralVenue?: boolean;

    OverPayout?: number;

    OverUnder?: number;

    PointSpread?: number;

    PointSpreadAwayTeamMoneyLine?: number;

    PointSpreadHomeTeamMoneyLine?: number;

    Quarter?: string | null;

    Quarters?: Array<LiveAPI.Quarter>;

    RefereeID?: number;

    Season?: number;

    SeasonType?: number;

    SeriesInfo?: Game.SeriesInfo;

    StadiumID?: number;

    Status?: string;

    TimeRemainingMinutes?: number | null;

    TimeRemainingSeconds?: number | null;

    UmpireID?: number;

    UnderPayout?: number;

    Updated?: string;
  }

  export namespace Game {
    export interface SeriesInfo {
      AwayTeamWins?: number;

      GameNumber?: number;

      HomeTeamWins?: number;

      MaxLength?: number;
    }
  }

  export interface Play {
    AssistedByPlayerID?: number | null;

    AwayPlayerID?: number | null;

    AwayTeamScore?: number;

    BaselineOffsetPercentage?: number | null;

    BlockedByPlayerID?: number | null;

    Category?: string;

    Coordinates?: unknown | null;

    Created?: string;

    Description?: string;

    FastBreak?: boolean | null;

    HomePlayerID?: number | null;

    HomeTeamScore?: number;

    Opponent?: string | null;

    OpponentID?: number | null;

    PlayerID?: number | null;

    PlayID?: number;

    Points?: number;

    PotentialPoints?: number;

    QuarterID?: number;

    QuarterName?: string;

    ReceivingPlayerID?: number | null;

    ReceivingTeam?: string | null;

    ReceivingTeamID?: number | null;

    Sequence?: number;

    ShotMade?: boolean | null;

    SidelineOffsetPercentage?: number | null;

    SideOfBasket?: string | null;

    StolenByPlayerID?: number | null;

    SubstituteInPlayerID?: number | null;

    SubstituteOutPlayerID?: number | null;

    Team?: string | null;

    TeamID?: number | null;

    TimeRemainingMinutes?: number | null;

    TimeRemainingSeconds?: number | null;

    Type?: string;

    Updated?: string;
  }
}

export interface LiveGetStatusResponse {
  count?: number;

  games?: Array<LiveGetStatusResponse.Game>;
}

export namespace LiveGetStatusResponse {
  export interface Game {
    _meta?: Game._Meta;

    Game?: Game.Game;

    Plays?: Array<Game.Play>;

    Quarters?: Array<LiveAPI.Quarter>;
  }

  export namespace Game {
    export interface _Meta {
      display_name?: string | null;

      filename?: string;

      game_id?: string;

      is_running?: boolean;

      timestamp?: string;
    }

    export interface Game {
      AlternateID?: number;

      Attendance?: number | null;

      AwayRotationNumber?: number;

      AwayTeam?: string;

      AwayTeamID?: number;

      AwayTeamMoneyLine?: number;

      AwayTeamScore?: number;

      Channel?: string;

      CrewChiefID?: number;

      DateTime?: string;

      DateTimeUTC?: string;

      Day?: string;

      GameEndDateTime?: string | null;

      GameID?: number;

      GlobalAwayTeamID?: number;

      GlobalGameID?: number;

      GlobalHomeTeamID?: number;

      HomeRotationNumber?: number;

      HomeTeam?: string;

      HomeTeamID?: number;

      HomeTeamMoneyLine?: number;

      HomeTeamScore?: number;

      InseasonTournament?: boolean;

      IsClosed?: boolean;

      LastPlay?: string | null;

      NeutralVenue?: boolean;

      OverPayout?: number;

      OverUnder?: number;

      PointSpread?: number;

      PointSpreadAwayTeamMoneyLine?: number;

      PointSpreadHomeTeamMoneyLine?: number;

      Quarter?: string | null;

      Quarters?: Array<LiveAPI.Quarter>;

      RefereeID?: number;

      Season?: number;

      SeasonType?: number;

      SeriesInfo?: Game.SeriesInfo;

      StadiumID?: number;

      Status?: string;

      TimeRemainingMinutes?: number | null;

      TimeRemainingSeconds?: number | null;

      UmpireID?: number;

      UnderPayout?: number;

      Updated?: string;
    }

    export namespace Game {
      export interface SeriesInfo {
        AwayTeamWins?: number;

        GameNumber?: number;

        HomeTeamWins?: number;

        MaxLength?: number;
      }
    }

    export interface Play {
      AssistedByPlayerID?: number | null;

      AwayPlayerID?: number | null;

      AwayTeamScore?: number;

      BaselineOffsetPercentage?: number | null;

      BlockedByPlayerID?: number | null;

      Category?: string;

      Coordinates?: unknown | null;

      Created?: string;

      Description?: string;

      FastBreak?: boolean | null;

      HomePlayerID?: number | null;

      HomeTeamScore?: number;

      Opponent?: string | null;

      OpponentID?: number | null;

      PlayerID?: number | null;

      PlayID?: number;

      Points?: number;

      PotentialPoints?: number;

      QuarterID?: number;

      QuarterName?: string;

      ReceivingPlayerID?: number | null;

      ReceivingTeam?: string | null;

      ReceivingTeamID?: number | null;

      Sequence?: number;

      ShotMade?: boolean | null;

      SidelineOffsetPercentage?: number | null;

      SideOfBasket?: string | null;

      StolenByPlayerID?: number | null;

      SubstituteInPlayerID?: number | null;

      SubstituteOutPlayerID?: number | null;

      Team?: string | null;

      TeamID?: number | null;

      TimeRemainingMinutes?: number | null;

      TimeRemainingSeconds?: number | null;

      Type?: string;

      Updated?: string;
    }
  }
}

export declare namespace Live {
  export {
    type Quarter as Quarter,
    type LiveGetGameStatusResponse as LiveGetGameStatusResponse,
    type LiveGetStatusResponse as LiveGetStatusResponse,
  };
}
