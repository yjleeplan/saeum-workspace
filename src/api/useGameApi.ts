import { createQueryKeys } from '@lukemorales/query-key-factory';
import { BaseAxiosInstance } from 'api/requestApi';
import { GetGameListRequest, GetGameListResponse, GetGameInfoResponse } from 'types';

const { request } = BaseAxiosInstance();

const getGameList: (params: GetGameListRequest) => Promise<GetGameListResponse> = async (params) => {
  const { data } = await request.get('/games', {
    params: {
      location_id: params?.location_id,
    },
  });

  return data;
};

const getGameInfo: (id: string) => Promise<GetGameInfoResponse> = async (id) => {
  const { data } = await request.get(`/games/${id}`, {});
  return data;
};

export const gameQueries = createQueryKeys('game', {
  list: (params) => ({
    queryKey: [params.location_id],
    queryFn: () => getGameList(params),
  }),
  info: (params) => ({
    queryKey: [params.id],
    queryFn: () => getGameInfo(params.id),
  }),
});
