import {
  inferQueryKeyStore,
  mergeQueryKeys,
} from '@lukemorales/query-key-factory';
import { userQueries } from './useUserApi';
import { attendanceQueries } from './useAttendanceApi';
import { commentQueries } from './useCommentApi';

export const queries = mergeQueryKeys(
  userQueries,
  attendanceQueries,
  commentQueries,
);

export type QueryKeys = inferQueryKeyStore<typeof queries>;
