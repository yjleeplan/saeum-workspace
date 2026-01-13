import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type {
  GetTeamListRequest,
  GetTeamListResponse,
  GetCountryListRequest,
  GetCountryListResponse,
  PutTeamCurrentRequest,
  PostCountryRequest,
  DeleteCountryRequest,
} from 'types';

const { request } = BaseAxiosInstance();

const getTeamList: (params: GetTeamListRequest) => Promise<GetTeamListResponse> = async (params) => {
  const { data } = await request.get('/team', {
    params,
  });

  return data;
};

const getCountryList: (params: GetCountryListRequest) => Promise<GetCountryListResponse> = async (params) => {
  const { data } = await request.get('/country', {
    params,
  });

  return data;
};

const putTeamCurrent = async (params: PutTeamCurrentRequest) => {
  const { data } = await request.put('/team/current', { ...params });
  return data;
};

const postCountry = async (params: PostCountryRequest) => {
  const { data } = await request.post('/country', { ...params });
  return data;
};

const deleteCountry = async (params: DeleteCountryRequest) => {
  const { data } = await request.delete('/country', {
    params,
  });
  return data;
};

export const usePutTeamCurrent = () => {
  return useMutation({
    mutationFn: putTeamCurrent,
  });
};

export const usePostCountry = () => {
  return useMutation({
    mutationFn: postCountry,
  });
};

export const useDeleteCountry = () => {
  return useMutation({
    mutationFn: deleteCountry,
  });
};

export const mapQueries = createQueryKeys('map', {
  teamList: (params) => ({
    queryKey: ['no-cache'],
    queryFn: () => getTeamList(params),
  }),
  countryList: (params) => ({
    queryKey: [params.team_no],
    queryFn: () => getCountryList(params),
  }),
});
