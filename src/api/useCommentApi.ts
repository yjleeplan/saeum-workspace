import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type { GetCommentListRequest, GetCommentListResponse, PostCommentRequest } from 'types';

const { request } = BaseAxiosInstance();

const getCommentList: (params: GetCommentListRequest) => Promise<GetCommentListResponse> = async (params) => {
  const { data } = await request.get('/comments', {
    params,
  });

  return data;
};

const postComment = async (params: PostCommentRequest) => {
  const { data } = await request.post('/comments', { ...params });
  return data;
};

export const usePostComment = () => {
  return useMutation({
    mutationFn: postComment,
  });
};

export const commentQueries = createQueryKeys('comment', {
  list: (params) => ({
    queryKey: [params.type, params.offset, params.limit],
    queryFn: () => getCommentList(params),
  }),
});
