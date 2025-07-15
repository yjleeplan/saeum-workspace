import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const IconWrapper = styled.div<{
  width: string;
  $position?: string;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $z?: number;
  $ml?: string;
  $mr?: string;
}>`
  position: ${({ $position }) => $position};
  display: flex;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  bottom: ${({ $bottom }) => $bottom};
  width: ${({ width }) => width};
  height: fit-content;
  margin-left: ${({ $ml }) => $ml};
  margin-right: ${({ $mr }) => $mr};
  cursor: pointer;
  z-index: ${({ $z }) => $z};
  transform: translateZ(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(40px) scale(1.1);
    z-index: 200;
  }
`;

interface NehemRoadReserveMobileProps {
  setIsLoading: (data: boolean) => void;
  openModal: (key: string) => void;
  closeModal: () => void;
}

const NehemRoadReserveMapMobile = ({ setIsLoading, openModal, closeModal }: NehemRoadReserveMobileProps) => {
  return (
    <>
      <Wrapper>
        <Section>
          <IconWrapper $position='relative' width={'25%'} $top='30px' $ml='25%' onClick={() => openModal('1')}>
            <Image width={'100%'} src={IconBethel} preview={false} />
          </IconWrapper>
        </Section>
        <Section>
          <IconWrapper $position='relative' width={'30%'} $top='70px' $ml='25%' onClick={() => openModal('2')}>
            <Image width={'100%'} src={IconRodem} preview={false} />
          </IconWrapper>
        </Section>
        <Section>
          <IconWrapper width={'40%'} $left='26%' $bottom='15%' $z={100} $ml='5%' onClick={() => openModal('3')}>
            <Image width={'100%'} src={IconMizpah} preview={false} />
          </IconWrapper>
          <IconWrapper $position='relative' width={'40%'} $top='20px' $mr='5%'>
            <Image width={'100%'} src={IconPlayground} preview={false} />
          </IconWrapper>
        </Section>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMapMobile;
