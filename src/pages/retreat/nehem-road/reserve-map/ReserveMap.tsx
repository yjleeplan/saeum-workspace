import React, { useState } from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import Map from 'assets/images/nehem-road/map_background.png';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';
import IconBasketball from 'assets/images/nehem-road/icon_basketball.png';
import BuildingModal from 'components/_modal/BuildingModal';

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BgWrapper = styled.div`
  position: relative;
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

const Comment = styled.div`
  padding: 10px 0;
  color: #fff;
  font-size: 12px;
`;

interface NehemRoadReserveSkyViewProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveMap = ({ isMobile, setIsLoading }: NehemRoadReserveSkyViewProps) => {
  const [buildingKey, setBuildingKey] = useState<number | undefined>(undefined);
  const [buildingModalVisible, setBuildingModalVisible] = useState<boolean>(false);

  // 건물 상세 모달 오픈
  const handleBuildingModalOpen = (key: number) => {
    setBuildingKey(key);
    setBuildingModalVisible(true);
  };

  // 건물 상세 모달 닫기
  const handleBuildingModalClose = () => {
    setBuildingModalVisible(false);
  };

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Reservation</Title>
      </TitleWrapper>
      <Content>
        <BgWrapper>
          <Image width={'100%'} src={Map} preview={false} />
        </BgWrapper>
        <IconWrapper width={'43%'} $left='2%' $top='46%' $z={100} onClick={() => handleBuildingModalOpen(3)}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={'32%'} $left='25%' $top='21%' onClick={() => handleBuildingModalOpen(2)}>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={'20%'} $top='-2%' $left='26%' onClick={() => handleBuildingModalOpen(1)}>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={'40%'} $right='0%' $bottom='3%' onClick={() => handleBuildingModalOpen(4)}>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
        <IconWrapper width={'13%'} $left='47%' $top='13%' $z={100} onClick={() => handleBuildingModalOpen(5)}>
          <Image width={'100%'} src={IconBasketball} preview={false} />
        </IconWrapper>
      </Content>
      {isMobile && (
        <Comment>
          ※ 위 이미지는 '구세군 백화산 수련원 조감도'를 참고하여 제작했습니다. 실제와는 다소 차이가 있습니다.
        </Comment>
      )}

      {/* 건물 상세 모달 */}
      <div id='buildingModal'>
        <BuildingModal
          visible={buildingModalVisible}
          onCancel={handleBuildingModalClose}
          isMobile={isMobile}
          selectedKey={buildingKey}
        />
      </div>
    </Wrapper>
  );
};

export default NehemRoadReserveMap;
