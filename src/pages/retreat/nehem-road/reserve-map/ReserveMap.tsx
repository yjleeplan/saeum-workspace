import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  width: 100%;
`;

const IconWrapper = styled.div<{
  width: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $z?: number;
}>`
  // position: absolute;
  display: flex;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  width: ${({ width }) => width};
  height: fit-content;
  cursor: pointer;
  z-index: ${({ $z }) => $z};
  transform: translateZ(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(40px) scale(1.08);
    z-index: 200;
  }
`;

interface NehemRoadReserveSkyViewProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveMap = ({ isMobile, setIsLoading }: NehemRoadReserveSkyViewProps) => {
  return (
    <>
      <Wrapper $ismobile={isMobile.toString()}>
        <IconWrapper width={isMobile ? '30%' : '20%'} $left='26%' $bottom='15%' $z={100}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={isMobile ? '30%' : '18%'} $left='35%' $bottom='33%'>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={isMobile ? '25%' : '10%'} $top='4%' $left='38%'>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={isMobile ? '30%' : '25%'} $right='15%' $bottom='12%'>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMap;
