import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';
import IconBackground from 'assets/images/nehem-road/icon_background.png';

const BgWrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  left: 10%;
  padding: 20px 0px;
`;

const Wrapper = styled.div`
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
  position: absolute;
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

interface NehemRoadReservePcProps {
  setIsLoading: (data: boolean) => void;
  openModal: (key: string) => void;
}

const NehemRoadReserveMapPc = ({ setIsLoading, openModal }: NehemRoadReservePcProps) => {
  return (
    <>
      <BgWrapper>
        <Image width={'100%'} height={'100%'} src={IconBackground} preview={false} />
      </BgWrapper>
      <Wrapper>
        <IconWrapper width={'18%'} $left='17%' $top='40%' $z={100} onClick={() => openModal('3')}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={'13%'} $left='26%' $top='31%' onClick={() => openModal('2')}>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={'8%'} $top='15%' $left='30%' onClick={() => openModal('1')}>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={'20%'} $right='25%' $bottom='11%'>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMapPc;
