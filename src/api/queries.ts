import { inferQueryKeyStore, mergeQueryKeys } from '@lukemorales/query-key-factory';
import { userQueries } from './useUserApi';
import { attendanceQueries } from './useAttendanceApi';
import { commentQueries } from './useCommentApi';
import { locationQueries } from './useLocationApi';
import { gameQueries } from './useGameApi';
import { reserveQueries } from './useReserveApi';

export const queries = mergeQueryKeys(
  userQueries,
  attendanceQueries,
  commentQueries,
  locationQueries,
  gameQueries,
  reserveQueries,
);

export type QueryKeys = inferQueryKeyStore<typeof queries>;
