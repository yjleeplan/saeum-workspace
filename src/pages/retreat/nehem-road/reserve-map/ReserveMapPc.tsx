import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';

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
  closeModal: () => void;
}

const NehemRoadReserveMapPc = ({ setIsLoading, openModal, closeModal }: NehemRoadReservePcProps) => {
  return (
    <>
      <Wrapper>
        <IconWrapper width={'24%'} $left='23%' $bottom='10%' $z={100} onClick={() => openModal('3')}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={'18%'} $left='35%' $bottom='33%' onClick={() => openModal('2')}>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={'10%'} $top='4%' $left='38%' onClick={() => openModal('1')}>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={'25%'} $right='15%' $bottom='5%'>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMapPc;
