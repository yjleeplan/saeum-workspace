import React, { useState } from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import ReserveModal from 'components/_modal/ReserveModal';
import { Reserve } from 'types/reserve';
import Building1 from './Building1';
import Building2 from './Building2';
import Building3 from './Building3';

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 14px;
  padding-right: 10px;
`;

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: ${({ $ismobile }) => ($ismobile === 'true' ? 'column' : 'row')};
  width: 100%;
`;

const Section = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  padding: 10px;
`;

interface NehemRoadReservePlanProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReservePlan = ({ isMobile, setIsLoading }: NehemRoadReservePlanProps) => {
  const [isRotate, setIsRotate] = useState<boolean>(!isMobile);
  const [reserveInfo, setReserveInfo] = useState<Reserve | undefined>(undefined);
  const [reserveModalVisible, setResrveModalVisible] = useState<boolean>(false);

  // 도면 토글
  const onChange = (checked: boolean) => {
    setIsRotate(checked);
  };

  // 예약하기 상세 모달 오픈
  const handleReserveModalOpen = (data: Reserve) => {
    setReserveInfo(data);
    setResrveModalVisible(true);
  };

  // 예약하기 상세 모달 닫기
  const handleReserveModalClose = () => {
    setResrveModalVisible(false);
  };

  return (
    <>
      <SwitchWrapper>
        <Switch checked={isRotate} onChange={onChange} />
      </SwitchWrapper>
      <Wrapper $ismobile={isMobile.toString()}>
        <Section width={isMobile ? 100 : 33}>
          <Building1 isRotate={isRotate} onClick={handleReserveModalOpen} />
        </Section>
        <Section width={isMobile ? 100 : 35}>
          <Building2 isRotate={isRotate} onClick={handleReserveModalOpen} />
        </Section>
        <Section width={isMobile ? 100 : 32}>
          <Building3 isRotate={isRotate} onClick={handleReserveModalOpen} />
        </Section>

        {/* 예약하기 상세 모달 */}
        <div id='reserveModal'>
          <ReserveModal
            visible={reserveModalVisible}
            onCancel={handleReserveModalClose}
            setIsLoading={setIsLoading}
            isMobile={isMobile}
            selectedInfo={reserveInfo}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default NehemRoadReservePlan;
