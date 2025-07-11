export interface Attendance {
  id: string;
  user_id: string;
  daylist: any; // 출석 일자는 매회마다 달라지기 때문에 타입을 정의하지 않음.
  updated_at: string;
  created_at: string;
}
