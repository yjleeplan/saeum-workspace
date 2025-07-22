export const ATTENDANCE_START_HOUR = 4;
export const ATTENDANCE_END_HOUR = 8;

export const IS_COMPLETE = (index: number, attendanceYn: string) => {
  switch (index) {
    case 0:
      return attendanceYn === 'Y' ? 'COMPLETE1' : false;
    case 1:
      return attendanceYn === 'Y' ? 'COMPLETE2' : false;
    case 2:
      return attendanceYn === 'Y' ? 'COMPLETE3' : false;
    case 3:
      return attendanceYn === 'Y' ? 'COMPLETE4' : false;
    case 4:
      return attendanceYn === 'Y' ? 'COMPLETE5' : false;
    case 5:
      return attendanceYn === 'Y' ? 'COMPLETE6' : false;

    default:
      return false;
  }
};

export const IS_NOT_COMPLETE = (index: number, today: number) => {
  switch (index) {
    case 0:
      return today === 23 ? 'DAY1' : 'SOON1';
    case 1:
      return today === 24 ? 'DAY2' : 'SOON2';
    case 2:
      return today === 25 ? 'DAY3' : 'SOON3';
    case 3:
      return today === 26 ? 'DAY4' : 'SOON4';
    case 4:
      return today === 27 ? 'DAY5' : 'SOON5';
    case 5:
      return today === 28 ? 'DAY6' : 'SOON6';

    default:
      return false;
  }
};

// 장소 목록
export const LOCATION_LIST = [
  { label: '전체', value: 0 },
  { label: '벧엘의 집', value: 1 },
  { label: '로뎀의 집', value: 2 },
  { label: '미스바 성전(본관)', value: 3 },
  { label: '운동장', value: 4 },
  { label: '농구장', value: 5 },
];

// 사용자 목록
export const USER_LIST = [
  { name: '1조', id: '' },
  { name: '2조', id: '' },
];

// 사용자 목록 (개발)
export const USER_LIST_DEV = [
  { name: '1조', id: '' },
  { name: '2조', id: '' },
];
