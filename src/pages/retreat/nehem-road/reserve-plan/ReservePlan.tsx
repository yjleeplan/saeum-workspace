import React, { useState } from 'react';
import { Switch } from 'antd';
import styled from 'styled-components';
import Building1 from './Building1';
import Building2 from './Building2';
import Building3 from './Building3';

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 14px;
  padding-right: 10px;
`;

const Wrapper = styled.div<{ ismobile: string }>`
  display: flex;
  flex-direction: ${({ ismobile }) => (ismobile === 'true' ? 'column' : 'row')};
  width: 100%;
`;

const Section = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  padding: 10px;
`;

interface NehemRoadReservePlanProps {
  isMobile: boolean;
}

const NehemRoadReservePlan = ({ isMobile }: NehemRoadReservePlanProps) => {
  const [isRotate, setIsRotate] = useState<boolean>(!isMobile);

  const onChange = (checked: boolean) => {
    setIsRotate(checked);
  };

  return (
    <>
      <SwitchWrapper>
        <Switch checked={isRotate} onChange={onChange} />
      </SwitchWrapper>
      <Wrapper ismobile={isMobile.toString()}>
        <Section width={isMobile ? 100 : 33}>
          <Building1 isRotate={isRotate} />
        </Section>
        <Section width={isMobile ? 100 : 35}>
          <Building2 isRotate={isRotate} />
        </Section>
        <Section width={isMobile ? 100 : 32}>
          <Building3 isRotate={isRotate} />
        </Section>
      </Wrapper>
    </>
  );
};

export default NehemRoadReservePlan;
