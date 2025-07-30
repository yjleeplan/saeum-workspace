export interface Reserve {
  id: number;
  user_id: string;
  game_time_id: number;
  created_at: string;
  updated_at: string;
}

export interface ReserveData extends Reserve {
  user_name: string;
  game_id: number;
  game_name: string;
  game_date: string;
  game_start_time: string;
  category: string | undefined | null;
  people: string | undefined | null;
  play_time: number | undefined | null;
  description: string | undefined | null;
  location_id: number | undefined | null;
  location_parent_id: number | undefined | null;
  location_name: string | undefined | null;
  location_name_display: string | undefined | null;
  is_possible: number;
}

export type GetReserveListRequest = {
  user_id?: string | undefined | null;
};

export type GetReserveListResponse = ReserveData[];

export type PostReserveRequest = {
  user_id?: string | undefined | null;
  game_time_id?: number | undefined | null;
  game_start_time?: string | undefined | null;
  game_end_time?: string | undefined | null;
};

export type PostReserveResponse = ReserveData[];

export type DeleteReserveRequest = {
  id?: number | undefined | null;
};

export type DeleteReserveResponse = {
  message: string;
};
