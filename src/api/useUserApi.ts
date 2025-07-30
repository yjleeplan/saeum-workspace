import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type {
  GetUserListRequest,
  GetUserListResponse,
  GetUserInfoResponse,
  PostUserRequest,
  GetExcelDownloadRequest,
  GetExcelDownloadResponse,
} from 'types';

const { request } = BaseAxiosInstance();

const getUserList: (params: GetUserListRequest) => Promise<GetUserListResponse> = async (params) => {
  const { data } = await request.get('/users', {
    params: {
      name: params?.name,
      department: params?.department,
    },
  });

  return data;
};

const getUserInfo: (id: string) => Promise<GetUserInfoResponse> = async (id) => {
  const { data } = await request.get(`/users/${id}`, {});
  return data;
};

const getExcelDownload: (params: GetExcelDownloadRequest) => Promise<GetExcelDownloadResponse> = async (params) => {
  const { data } = await request.get('/excel/users', {
    params: {
      name: params?.name,
      department: params?.department,
    },
  });

  return data;
};

const postUser = async (params: PostUserRequest) => {
  const { data } = await request.post('/users', { ...params });
  return data;
};

export const usePostUser = () => {
  return useMutation({
    mutationFn: postUser,
  });
};

export const userQueries = createQueryKeys('user', {
  list: (params) => ({
    queryKey: ['no-cache'],
    queryFn: () => getUserList(params),
  }),
  info: (params) => ({
    queryKey: [params.id],
    queryFn: () => getUserInfo(params.id),
  }),
  excelDownload: (params) => ({
    queryKey: ['no-cache'],
    queryFn: () => getExcelDownload(params),
  }),
});
