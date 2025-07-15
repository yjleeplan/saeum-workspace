import React, { useState } from 'react';
import NehemRoadReserveMapPc from './ReserveMapPc';
import NehemRoadReserveMapMobile from './ReserveMapMobile';
import BuildingModal from 'components/_modal/BuildingModal';

interface NehemRoadReserveSkyViewProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveMap = ({ isMobile, setIsLoading }: NehemRoadReserveSkyViewProps) => {
  const [buildingKey, setBuildingKey] = useState<string | undefined>(undefined);
  const [buildingModalVisible, setBuildingModalVisible] = useState<boolean>(false);

  // 건물 상세 모달 오픈
  const handleBuildingModalOpen = (key: string) => {
    setBuildingKey(key);
    setBuildingModalVisible(true);
  };

  // 건물 상세 모달 닫기
  const handleBuildingModalClose = () => {
    setBuildingModalVisible(false);
  };

  return (
    <>
      {isMobile ? (
        <NehemRoadReserveMapMobile
          setIsLoading={setIsLoading}
          openModal={handleBuildingModalOpen}
          closeModal={handleBuildingModalClose}
        />
      ) : (
        <NehemRoadReserveMapPc
          setIsLoading={setIsLoading}
          openModal={handleBuildingModalOpen}
          closeModal={handleBuildingModalClose}
        />
      )}

      {/* 건물 상세 모달 */}
      <div id='buildingModal'>
        <BuildingModal
          visible={buildingModalVisible}
          onCancel={handleBuildingModalClose}
          setIsLoading={setIsLoading}
          isMobile={isMobile}
          selectedKey={buildingKey}
        />
      </div>
    </>
  );
};

export default NehemRoadReserveMap;
