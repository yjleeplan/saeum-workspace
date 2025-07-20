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
  top: 25%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  // height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  top: 25%;
  display: flex;
  flex-direction: column;
  width: 100%;
  // margin-top: 30px;
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
}

const NehemRoadReserveMapMobile = ({ setIsLoading, openModal }: NehemRoadReserveMobileProps) => {
  return (
    <>
      <BgWrapper>
        <Image width={'100%'} height={'75%'} src={IconBackground} preview={false} />
      </BgWrapper>
      <Wrapper>
        <Section>
          <IconWrapper $position='relative' width={'15%'} $top='22px' $ml='23%' onClick={() => openModal('1')}>
            <Image width={'100%'} src={IconBethel} preview={false} />
          </IconWrapper>
        </Section>
        <Section>
          <IconWrapper $position='relative' width={'16%'} $top='27px' $ml='20%' onClick={() => openModal('2')}>
            <Image width={'100%'} src={IconRodem} preview={false} />
          </IconWrapper>
        </Section>
        <Section>
          <IconWrapper $position='relative' width={'20%'} $top='-9px' $z={100} $ml='10%' onClick={() => openModal('3')}>
            <Image width={'100%'} src={IconMizpah} preview={false} />
          </IconWrapper>
          <IconWrapper $position='relative' width={'24%'} $mr='19%'>
            <Image width={'100%'} src={IconPlayground} preview={false} />
          </IconWrapper>
        </Section>
      </Wrapper>
    </>
  );
};

export default NehemRoadReserveMapMobile;
