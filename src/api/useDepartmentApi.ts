import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';
import type { GetDepartmentCountRequest, GetDepartmentCountResponse, PutDepartmentCount } from 'types';

const { request } = BaseAxiosInstance();

const getDepartmentCount: (params: GetDepartmentCountRequest) => Promise<GetDepartmentCountResponse> = async (
  params,
) => {
  const { data } = await request.get('/department/count', {
    params,
  });

  return data;
};

const putDepartmentCount = async (params: PutDepartmentCount) => {
  const { data } = await request.put(`/department/${params.id}/free_count`, {
    ...params.data,
  });
  return data;
};

export const usePutDepartmentCount = () => {
  return useMutation({
    mutationFn: putDepartmentCount,
  });
};

export const departmentQueries = createQueryKeys('department', {
  count: (params) => ({
    queryKey: [params.department],
    queryFn: () => getDepartmentCount(params),
  }),
});
