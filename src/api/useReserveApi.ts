import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type {
  GetReserveListRequest,
  GetReserveListResponse,
  GetReserveByGameListRequest,
  GetReserveListByGameResponse,
  PostReserveRequest,
  DeleteReserveRequest,
} from 'types';

const { request } = BaseAxiosInstance();

const getReserveList: (params: GetReserveListRequest) => Promise<GetReserveListResponse> = async (params) => {
  const { data } = await request.get('/reserve', {
    params: {
      user_id: params?.user_id,
    },
  });

  return data;
};

const getReserveByGameList: (params: GetReserveByGameListRequest) => Promise<GetReserveListByGameResponse> = async (
  params,
) => {
  const { data } = await request.get('/reserve', {
    params: {
      game_id: params?.game_id,
    },
  });

  return data;
};

const postReserve = async (params: PostReserveRequest) => {
  const { data } = await request.post('/reserve', { ...params });
  return data;
};

const deleteReserve = async (params: DeleteReserveRequest) => {
  const { data } = await request.delete('/reserve', {
    params: {
      id: params?.id,
    },
  });
  return data;
};

export const usePostReserve = () => {
  return useMutation({
    mutationFn: postReserve,
  });
};

export const useDeleteReserve = () => {
  return useMutation({
    mutationFn: deleteReserve,
  });
};

export const reserveQueries = createQueryKeys('reserve', {
  list: (params) => ({
    queryKey: ['no-cache'],
    queryFn: () => getReserveList(params),
  }),
  listByGame: (params) => ({
    queryKey: ['no-cache'],
    queryFn: () => getReserveByGameList(params),
  }),
});
