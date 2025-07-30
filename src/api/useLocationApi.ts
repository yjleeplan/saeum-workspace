import { createQueryKeys } from '@lukemorales/query-key-factory';
import { BaseAxiosInstance } from 'api/requestApi';
import type { GetLocationListRequest, GetLocationListResponse } from 'types';

const { request } = BaseAxiosInstance();

const getLocationList: (params: GetLocationListRequest) => Promise<GetLocationListResponse> = async (params) => {
  const { data } = await request.get('/locations', {
    params: {
      parent_id: params?.parent_id,
    },
  });

  return data;
};

export const locationQueries = createQueryKeys('location', {
  list: (params) => ({
    queryKey: [params.parent_id],
    queryFn: () => getLocationList(params),
  }),
});
