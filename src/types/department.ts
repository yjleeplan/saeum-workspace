export interface DepartmentCount {
  project_id: string;
  department_id: string;
  department_name: string;
  attendance_free_count: number;
  max_attendance_count: number;
  count_day1: number;
  count_day2: number;
  count_day3: number;
  count_day4: number;
  count_day5: number;
  count_day6: number;
  count_day7: number;
  count_day8: number;
  count_day9: number;
  count_day10: number;
  count_day11: number;
  count_day12: number;
  total_user_count: number;
  total_attendance_count: number;
}

export type GetDepartmentCountRequest = {
  departmentName?: string;
};

export type GetDepartmentCountResponse = {} & DepartmentCount[];

export type PutDepartmentCount = {
  id: string;
  data: {
    add_count: number;
  };
};
