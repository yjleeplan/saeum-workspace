import { inferQueryKeyStore, mergeQueryKeys } from '@lukemorales/query-key-factory';
import { userQueries } from './useUserApi';
import { attendanceQueries } from './useAttendanceApi';
import { commentQueries } from './useCommentApi';
import { locationQueries } from './useLocationApi';
import { gameQueries } from './useGameApi';
import { reserveQueries } from './useReserveApi';
import { mapQueries } from './useMapApi';
import { departmentQueries } from './useDepartmentApi';

export const queries = mergeQueryKeys(
  userQueries,
  attendanceQueries,
  commentQueries,
  locationQueries,
  gameQueries,
  reserveQueries,
  mapQueries,
  departmentQueries,
);

export type QueryKeys = inferQueryKeyStore<typeof queries>;
