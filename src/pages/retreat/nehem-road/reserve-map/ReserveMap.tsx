import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Image } from 'antd';
import Map from 'assets/images/nehem-road/map_background.jpg';
import IconMizpah from 'assets/images/nehem-road/icon_mizpah.png';
import IconRodem from 'assets/images/nehem-road/icon_rodem.png';
import IconBethel from 'assets/images/nehem-road/icon_bethel.png';
import IconPlayground from 'assets/images/nehem-road/icon_playground.png';
import IconBasketball from 'assets/images/nehem-road/icon_basketball.png';
import BuildingModal from 'components/_modal/BuildingModal';
import { Wrapper, TitleWrapper, Title, Content, BgWrapper, IconWrapper, Comment } from './ReserveMap.styles';

interface NehemRoadReserveSkyViewProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveMap = () => {
  const { isMobile, setIsLoading }: NehemRoadReserveSkyViewProps = useOutletContext();

  /** State */
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
        <IconWrapper width={'40%'} $left='4%' $top='49%' $z={100} onClick={() => handleBuildingModalOpen(3)}>
          <Image width={'100%'} src={IconMizpah} preview={false} />
        </IconWrapper>
        <IconWrapper width={'33%'} $left='26%' $top='29%' onClick={() => handleBuildingModalOpen(2)}>
          <Image width={'100%'} src={IconRodem} preview={false} />
        </IconWrapper>
        <IconWrapper width={'23%'} $top='3%' $left='23%' onClick={() => handleBuildingModalOpen(1)}>
          <Image width={'100%'} src={IconBethel} preview={false} />
        </IconWrapper>
        <IconWrapper width={'45%'} $right='0%' $bottom='3%' onClick={() => handleBuildingModalOpen(4)}>
          <Image width={'100%'} src={IconPlayground} preview={false} />
        </IconWrapper>
        <IconWrapper width={'22%'} $left='43%' $top='15%' $z={100} onClick={() => handleBuildingModalOpen(5)}>
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
