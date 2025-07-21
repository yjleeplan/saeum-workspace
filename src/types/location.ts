export interface Location {
  id: number;
  parent_id?: number | undefined | null;
  name: string;
  name_display?: string | undefined | null;
  state?: string | undefined | null;
}

export interface LocationInfo extends Location {
  game_id?: number | undefined | null;
}

export type GetLocationListRequest = {
  parent_id?: string | undefined | null;
};

export type GetLocationListResponse = LocationInfo[];
