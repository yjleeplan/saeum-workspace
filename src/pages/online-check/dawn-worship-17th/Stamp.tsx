import React from 'react';
import { Image, message } from 'antd';
import { usePutAttendance } from 'api/useAttendanceApi';
import btn1 from 'assets/images/dawn-worship-17th/btn_1.png';
import btn2 from 'assets/images/dawn-worship-17th/btn_2.png';
import btn3 from 'assets/images/dawn-worship-17th/btn_3.png';
import btn4 from 'assets/images/dawn-worship-17th/btn_4.png';
import btn5 from 'assets/images/dawn-worship-17th/btn_5.png';
import btn6 from 'assets/images/dawn-worship-17th/btn_6.png';
import btn7 from 'assets/images/dawn-worship-17th/btn_7.png';
import btn8 from 'assets/images/dawn-worship-17th/btn_8.png';
import btn9 from 'assets/images/dawn-worship-17th/btn_9.png';
import btn10 from 'assets/images/dawn-worship-17th/btn_10.png';
import btn11 from 'assets/images/dawn-worship-17th/btn_11.png';
import btn12 from 'assets/images/dawn-worship-17th/btn_12.png';
import bonus from 'assets/images/dawn-worship-17th/btn_bonus.png';
import complete from 'assets/images/dawn-worship-17th/btn_complete.png';
import soon from 'assets/images/dawn-worship-17th/btn_soon.png';
import {
  ATTENDANCE_END_HOUR,
  ATTENDANCE_START_HOUR,
  BONUS_DAYS,
  BONUS_END_HOUR,
  BONUS_START_HOUR,
  IS_BONUS,
  IS_COMPLETE,
  IS_NOT_COMPLETE,
} from './config/config';
import _ from 'lodash';

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
      14: 'day1',
      15: 'day2',
      16: 'day3',
      17: 'day4',
      18: 'day5',
      19: 'day6',
      21: 'day7',
      22: 'day8',
      23: 'day9',
      24: 'day10',
      25: 'day11',
      26: 'day12',
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
      DAY7: btn7,
      DAY8: btn8,
      DAY9: btn9,
      DAY10: btn10,
      DAY11: btn11,
      DAY12: btn12,
      COMPLETE: complete,
      BONUS: bonus,
      SOON: soon,
    }[value];
  };

  // 스탬프 타입
  const stampType = () => {
    let type = IS_COMPLETE(attendanceYn);
    if (!type) {
      if (_.includes(BONUS_DAYS, today) && BONUS_START_HOUR <= hour && hour < BONUS_END_HOUR) {
        type = IS_BONUS(index, today);
      } else {
        type = IS_NOT_COMPLETE(index, today);
      }
    }

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
    let result = true;

    if (type === 'COMPLETE' || type === 'BONUS' || type === 'SOON') {
      result = false;
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
      if (_.includes(BONUS_DAYS, today) && BONUS_START_HOUR <= hour && hour < BONUS_END_HOUR) {
        handlePutAttendance({
          id: attendanceId,
          data: { [`day${Number(index) + 1}`]: 'B2' },
        });
      } else {
        if (todayFormatter(today) === `day${Number(index) + 1}`) {
          if (ATTENDANCE_START_HOUR <= hour && hour < ATTENDANCE_END_HOUR) {
            handlePutAttendance({
              id: attendanceId,
              data: { [`day${Number(index) + 1}`]: 'Y' },
            });
          } else {
            message.warning('출석은 04:00 ~ 08:00 사이에만 가능합니다.', 1.2);
          }
        }
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
