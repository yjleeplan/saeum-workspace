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
  game_time_id: number;
  game_date: string;
  game_start_time: string;
  game_end_time: string;
  game_id: number;
  is_possible: number;
}

export interface GameAndLocationAndTime extends GameAndLocation {
  time_list: GameTime[];
}

export interface GameTimeReserve {
  id: number;
  game_date: string;
  game_start_time: string;
  game_end_time: string;
  game_id: number;
  is_possible: number;
  reserve_count: number;
}

export interface GameReserve {
  id: number;
  name: string;
  category: string;
  people: string;
  people_min: number;
  people_max: number;
  play_time: number;
  description?: string | undefined | null;
  location_id?: number | undefined | null;
  location_parent_id?: number | undefined | null;
  location_name: string;
  location_name_display: string;
  time_list: GameTimeReserve[];
}

export type GetGameListRequest = {
  location_id?: number | undefined | null;
};

export type GetGameListResponse = GameAndLocation[];

export type GetGameInfoResponse = GameAndLocationAndTime;

export type GetGameTimeListResponse = GameReserve[];
