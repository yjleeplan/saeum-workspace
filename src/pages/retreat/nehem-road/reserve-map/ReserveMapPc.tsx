import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import Map from 'assets/images/nehem-road/map_background.png';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';
import IconBasketball from 'assets/images/nehem-road/icon_basketball.png';

const BgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const IconWrapper = styled.div<{
  width: string;
  height?: string;
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
  height: ${({ height }) => (height ? height : 'fit-content')};
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
        <Image width={'70%'} src={Map} preview={false} />
      </BgWrapper>
      <Wrapper>
        <IconWrapper width={'32%'} $left='14%' $top='45%' $z={100} onClick={() => openModal('3')}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={'23%'} $left='32%' $top='24%' onClick={() => openModal('2')}>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={'14%'} $top='6%' $left='33%' onClick={() => openModal('1')}>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={'28%'} $right='15%' $bottom='9%'>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
        <IconWrapper width={'10%'} $left='47%' $top='17%' $z={100}>
          <Image width={'100%'} src={IconBasketball} preview={false} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMapPc;
