import React from 'react';
import styled from 'styled-components';
import Building1 from './Building1';
import Building2 from './Building2';
import Building3 from './Building3';

const Wrapper = styled.div<{ ismobile: string }>`
  display: flex;
  flex-direction: ${({ ismobile }) => (ismobile === 'true' ? 'column' : 'row')};
  width: 100%;
`;

const Section = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  padding: 10px;
`;

interface ComeLetUsBuildProps {
  isMobile: boolean;
}

const ComeLetUsBuild = ({ isMobile }: ComeLetUsBuildProps) => {
  return (
    <Wrapper ismobile={isMobile.toString()}>
      <Section width={isMobile ? 100 : 33}>
        <Building1 />
      </Section>
      <Section width={isMobile ? 100 : 35}>
        <Building2 />
      </Section>
      <Section width={isMobile ? 100 : 32}>
        <Building3 />
      </Section>
    </Wrapper>
  );
};

export default ComeLetUsBuild;
