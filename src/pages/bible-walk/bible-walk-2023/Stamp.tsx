import React from 'react';
import { Image, message } from 'antd';
import { usePutAttendance } from 'api/useAttendanceApi';
import btn1 from 'assets/images/bible-walk-2023/btn_1.png';
import btn2 from 'assets/images/bible-walk-2023/btn_2.png';
import btn3 from 'assets/images/bible-walk-2023/btn_3.png';
import btn4 from 'assets/images/bible-walk-2023/btn_4.png';
import btn5 from 'assets/images/bible-walk-2023/btn_5.png';
import btn6 from 'assets/images/bible-walk-2023/btn_6.png';
import complete1 from 'assets/images/bible-walk-2023/btn_1_complete.png';
import complete2 from 'assets/images/bible-walk-2023/btn_2_complete.png';
import complete3 from 'assets/images/bible-walk-2023/btn_3_complete.png';
import complete4 from 'assets/images/bible-walk-2023/btn_4_complete.png';
import complete5 from 'assets/images/bible-walk-2023/btn_5_complete.png';
import complete6 from 'assets/images/bible-walk-2023/btn_6_complete.png';
import { ATTENDANCE_END_HOUR, ATTENDANCE_START_HOUR, IS_COMPLETE, IS_NOT_COMPLETE } from './config/config';

interface StampProps {
  index: number;
  attendanceYn: string;
  attendanceId: string;
  onSelectUser: () => void;
  setIsLoading: (data: boolean) => void;
  today: number;
  hour: number;
}

const Stamp = ({ index, attendanceYn, attendanceId, onSelectUser, setIsLoading, today, hour }: StampProps) => {
  // 금일자 컬럼 Formatter
  const todayFormatter = (today: number) => {
    return {
      23: 'day1',
      24: 'day2',
      25: 'day3',
      26: 'day4',
      27: 'day5',
      28: 'day6',
    }[today];
  };

  // 스탬프 Formatter
  const stampFormatter = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return undefined;
    }

    return {
      DAY1: btn1,
      DAY2: btn2,
      DAY3: btn3,
      DAY4: btn4,
      DAY5: btn5,
      DAY6: btn6,
      COMPLETE1: complete1,
      COMPLETE2: complete2,
      COMPLETE3: complete3,
      COMPLETE4: complete4,
      COMPLETE5: complete5,
      COMPLETE6: complete6,
      SOON1: btn1,
      SOON2: btn2,
      SOON3: btn3,
      SOON4: btn4,
      SOON5: btn5,
      SOON6: btn6,
    }[value];
  };

  // 스탬프 타입
  const stampType = () => {
    let type = IS_COMPLETE(index, attendanceYn);
    if (!type) type = IS_NOT_COMPLETE(index, today);

    return type;
  };

  // 스탬프 이미지 소스
  const stampSource = () => {
    const type = stampType();

    return stampFormatter(type);
  };

  // 출석 체크 가능 여부
  const isUpdateEnable = () => {
    const type = stampType();
    let result = false;

    if (type && !['COMPLETE1', 'COMPLETE2', 'COMPLETE3', 'COMPLETE4', 'COMPLETE5', 'COMPLETE6'].includes(type)) {
      result = true;
    }

    return result;
  };

  // 출석 API
  const { mutate: putAttendance } = usePutAttendance();
  const handlePutAttendance = async (payload: any) => {
    setIsLoading(true);

    putAttendance(payload, {
      onSuccess: () => {
        onSelectUser();
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        setIsLoading(false);
      },
    });
  };

  // 출석
  const handleUpdatedAttendance = async () => {
    if (isUpdateEnable()) {
      if (todayFormatter(today) === `day${Number(index) + 1}`) {
        if (ATTENDANCE_START_HOUR <= hour && hour < ATTENDANCE_END_HOUR) {
          handlePutAttendance({
            id: attendanceId,
            data: { [`day${Number(index) + 1}`]: 'Y' },
          });
        } else {
          message.warning('출석은 04:00 ~ 08:00 사이에만 가능합니다.', 1.2);
        }
      } else {
        message.warning('금일 출석 가능 일자가 아닙니다.', 1.2);
      }
    }
  };

  return (
    <div>
      <Image
        wrapperClassName={attendanceYn !== 'N' ? 'btnEffect' : ''}
        src={stampSource()}
        preview={false}
        onClick={handleUpdatedAttendance}
      />
      {Number(index) + 1}일차
    </div>
  );
};

export default Stamp;
