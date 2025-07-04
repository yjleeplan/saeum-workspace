import React from 'react';
import { Image, Modal } from 'antd';
import { usePutAttendance } from 'api/useAttendanceApi';
import btn1 from 'assets/images/btn_1.png';
import btn2 from 'assets/images/btn_2.png';
import btn3 from 'assets/images/btn_3.png';
import btn4 from 'assets/images/btn_4.png';
import btn5 from 'assets/images/btn_5.png';
import btn6 from 'assets/images/btn_6.png';
import complete1 from 'assets/images/btn_1_complete.png';
import complete2 from 'assets/images/btn_2_complete.png';
import complete3 from 'assets/images/btn_3_complete.png';
import complete4 from 'assets/images/btn_4_complete.png';
import complete5 from 'assets/images/btn_5_complete.png';
import complete6 from 'assets/images/btn_6_complete.png';
import { IS_COMPLETE } from 'context/Context';

interface AdminStampProps {
  index: number;
  attendanceYn: string;
  attendanceId: string;
  onSelectUser: () => void;
  setIsLoading: (data: boolean) => void;
}

const AdminStamp = ({ index, attendanceYn, attendanceId, onSelectUser, setIsLoading }: AdminStampProps) => {
  // 금일자 컬럼 Formatter
  const indexFormatter = (index: number) => {
    return {
      0: 'DAY1',
      1: 'DAY2',
      2: 'DAY3',
      3: 'DAY4',
      4: 'DAY5',
      5: 'DAY6',
    }[index];
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
    }[value];
  };

  // 스탬프 타입
  const stampType = () => {
    let type = IS_COMPLETE(index, attendanceYn);
    if (!type) {
      type = indexFormatter(index) ?? false;
    }

    return type;
  };

  // 스탬프 이미지 소스
  const stampSource = () => {
    const type = stampType();

    return stampFormatter(type);
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
  const handleUpdatedAttendance = () => {
    Modal.confirm({
      title: `${index + 1}일차`,
      content: attendanceYn === 'N' ? '출석 처리하시겠습니까?' : '결석 처리하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk: async () => {
        const value = attendanceYn === 'N' ? 'Y' : 'N';

        handlePutAttendance({
          id: attendanceId,
          data: { [`day${Number(index) + 1}`]: value },
        });
      },
    });
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

export default AdminStamp;
