import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type { GetRankListResponse, PostRankRequest } from 'types';

const { request } = BaseAxiosInstance();

const getRankList: () => Promise<GetRankListResponse> = async () => {
  const { data } = await request.get(`/rank`, {});
  return data;
};

const postRank = async (params: PostRankRequest) => {
  const { data } = await request.post('/rank', { ...params });
  return data;
};

export const usePostRank = () => {
  return useMutation({
    mutationFn: postRank,
  });
};

export const rankQueries = createQueryKeys('rank', {
  list: () => ({
    queryKey: ['no-cache'],
    queryFn: () => getRankList(),
  }),
});
