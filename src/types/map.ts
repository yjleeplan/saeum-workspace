export type Team = {
  team_no: number;
  team_color: string;
  team_total: number;
  team_current: string;
};

export type Country = {
  country_name: string;
  country_team_color: string;
  country_team_no: number;
};

export type GetTeamListRequest = {
  order_by_column: string;
  order_by_value: string;
};

export type GetTeamListResponse = {} & Team[];

export type GetCountryListRequest = {
  team_no?: string;
};

export type GetCountryListResponse = {} & Country[];

export type PutTeamCurrentRequest = {
  team_no: number;
  country_name: string;
};

export type PostCountryRequest = {
  team_no: number;
  country_name: string;
};

export type DeleteCountryRequest = {
  team_no: number;
  country_name: string;
};
