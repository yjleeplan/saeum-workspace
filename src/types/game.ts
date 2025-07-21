export interface Game {
  id: number;
  name: string;
  category?: string | undefined | null;
  people?: string | undefined | null;
  play_time?: number | undefined | null;
  description?: string | undefined | null;
  location_id?: number | undefined | null;
}

export interface GameAndLocation extends Game {
  location_parent_id?: number | undefined | null;
  location_name?: string | undefined | null;
  location_name_display?: string | undefined | null;
}

export interface GameTime {
  id: number;
  game_date: string;
  game_time: string;
  game_id: number;
  is_possible: number;
}

export interface GameAndLocationAndTime extends GameAndLocation {
  time_list: GameTime[];
}

export type GetGameListRequest = {
  location_id?: number | undefined | null;
};

export type GetGameListResponse = GameAndLocation[];

export type GetGameInfoResponse = GameAndLocationAndTime;
