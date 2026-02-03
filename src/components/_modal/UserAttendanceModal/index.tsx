import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState, useMemo } from 'react';
import { Col, Modal, Row, Typography } from 'antd';
import { isEmpty, map } from 'lodash';
import moment from 'moment';
import { queries } from 'api/queries';
import Stamp from 'components/Stamp';
import { UserAttendance } from 'types';

const { Text } = Typography;

interface ModalProps {
  visible: boolean;
  selectedUserInfo?: UserAttendance | undefined;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
}

const UserAttendanceModal = ({ visible, selectedUserInfo, onCancel, setIsLoading }: ModalProps) => {
  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [today, setToday] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  // 사용자 상세정보 조회 API
  const {
    data: userInfoQueryData,
    refetch: refetchUserInfo,
    isSuccess: userInfoQuerSuccess,
    isFetching: userInfoFetching,
  } = useQuery({
    ...queries.user.info({
      id: selectedUserInfo?.id,
    }),
    staleTime: 500,
    cacheTime: 1000,
    enabled: !isEmpty(selectedUserInfo),
  });

  // 사용자 상세정보 데이터 세팅
  const userInfo = useMemo(() => {
    if (userInfoQuerSuccess) {
      return userInfoQueryData;
    }
  }, [userInfoQueryData]);

  // 사용자 상세정보 조회
  const handleSelectUser = async () => {
    refetchUserInfo();
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  /** Effect */
  useEffect(() => {
    const currentDate = new Date();
    const currentToday = currentDate.getDate();
    const currentHour = moment().hour();

    setToday(currentToday);
    setHour(currentHour);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (userInfoFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, userInfoFetching]);

  return (
    <Modal
      wrapClassName='user-attendance-modal-wrap'
      title=''
      open={visible}
      onCancel={handleCancel}
      footer={false}
      maskClosable={false}
      getContainer={document.getElementById('userAttendanceModal') ?? false}
      destroyOnClose
    >
      <Row className='user-attendance-modal-title'>
        <Col span={24}>
          <div className='main-title' />
        </Col>
      </Row>
      <Row className='user-attendance-modal-info'>
        <Col span={24}>
          <Text className='user-name'>{userInfo?.name}</Text> <Text className='info-text'>님의 출석판입니다.</Text>
        </Col>
      </Row>
      <Row className='user-attendance-modal-attendance'>
        <Col span={24}>
          <Row>
            {!isEmpty(userInfo) &&
              map(userInfo?.attendance?.daylist, (item, index) => {
                if (index < 3) {
                  return (
                    <Col span={8} className='stamp-col' key={index}>
                      <Stamp
                        index={index}
                        attendanceYn={item[`day${Number(index) + 1}`]}
                        attendanceId={userInfo?.attendance?.id}
                        onSelectUser={handleSelectUser}
                        setIsLoading={setIsLoading}
                        today={today}
                        hour={hour}
                      />
                    </Col>
                  );
                } else {
                  return '';
                }
              })}
          </Row>
          <Row>
            {!isEmpty(userInfo) &&
              map(userInfo?.attendance?.daylist, (item, index) => {
                if (2 < index && index < 6) {
                  return (
                    <Col span={8} className='stamp-col' key={index}>
                      <Stamp
                        index={index}
                        attendanceYn={item[`day${Number(index) + 1}`]}
                        attendanceId={userInfo?.attendance.id}
                        onSelectUser={handleSelectUser}
                        setIsLoading={setIsLoading}
                        today={today}
                        hour={hour}
                      />
                    </Col>
                  );
                } else {
                  return '';
                }
              })}
          </Row>
        </Col>
      </Row>
      <Row className='user-attendance-modal-attendance-footer'>
        <Col span={24}>
          <Row>
            <Col span={24}>※ 금일자 도장을 누르시면 출석이 완료됩니다.</Col>
          </Row>
          <Row>
            <Col span={24}>※ 출석은 당일 오전8시까지만 가능합니다.</Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default UserAttendanceModal;
