import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { BaseAxiosInstance } from 'api/requestApi';

const { request } = BaseAxiosInstance();

const putAttendance = async (params: any) => {
  const { data } = await request.put(`/attendance/${params.id}`, {
    ...params.data,
  });
  return data;
};

export const usePutAttendance = () => {
  return useMutation({
    mutationFn: putAttendance,
  });
};

export const attendanceQueries = createQueryKeys('attendance', {});
