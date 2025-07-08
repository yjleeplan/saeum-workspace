import { Attendance } from './attendance';

export interface User {
  id: string;
  name: string;
  department: string;
  birthday?: string | undefined | null;
  project_id?: string | undefined | null;
  updated_at: string;
  created_at: string;
}

export interface UserAttendance extends User {
  attendance: Attendance;
}

export type GetUserListRequest = {
  name?: string | undefined | null;
  department?: string | undefined | null;
};

export type GetUserListResponse = UserAttendance[];

export type GetUserInfoRequest = string;

export type GetUserInfoResponse = UserAttendance;

export type PostUserRequest = {
  name: string;
  department: string;
};

export type GetExcelDownloadRequest = {
  name?: string | undefined | null;
  department?: string | undefined | null;
};

export type GetExcelDownloadResponse = ({
  name: string;
  department: string;
} & any)[];
