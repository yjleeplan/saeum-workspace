export interface Rank {
  type: number;
  name: string;
  age: number;
  point: number;
  updated_at: string;
  created_at: string;
}

export type GetRankListResponse = {
  list1?: Rank[];
  list2?: Rank[];
  list3?: Rank[];
  list4?: Rank[];
  list5?: Rank[];
  list6?: Rank[];
};

export type PostRankRequest = {
  type: number;
  name: string;
  age: number;
  point: number;
};
