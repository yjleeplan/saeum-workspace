import React, { useState } from 'react';
import { Modal, Spin } from 'antd';
import ReserveModal from 'components/_modal/ReserveModal';
import Building1 from 'pages/retreat/nehem-road/reserve-plan/Building1';
import Building2 from 'pages/retreat/nehem-road/reserve-plan/Building2';
import Building3 from 'pages/retreat/nehem-road/reserve-plan/Building3';
import Building4 from 'pages/retreat/nehem-road/reserve-plan/Building4';
import Building5 from 'pages/retreat/nehem-road/reserve-plan/Building5';
import { LOCATION_LIST } from 'pages/retreat/nehem-road/config/config';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  isMobile: boolean;
  selectedKey: number | undefined;
}

const BuildingModal = ({ visible, onCancel, isMobile, selectedKey }: ModalProps) => {
  /** State */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reserveModalVisible, setResrveModalVisible] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  // 예약하기 상세 모달 오픈
  const handleReserveModalOpen = (id: number) => {
    setSelectedId(id);
    setResrveModalVisible(true);
  };

  // 예약하기 상세 모달 닫기
  const handleReserveModalClose = () => {
    setResrveModalVisible(false);
  };

  return (
    <>
      <Modal
        wrapClassName='building-modal-wrap'
        title={LOCATION_LIST?.filter((data) => data.value === selectedKey)[0]?.label}
        open={visible}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
        // getContainer={document.getElementById('reserveModal') ?? false}
        destroyOnClose
      >
        <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
          {selectedKey === 1 && (
            <Building1 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === 2 && (
            <Building2 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === 3 && (
            <Building3 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === 4 && (
            <Building4 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === 5 && (
            <Building5 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
        </Spin>
      </Modal>

      {/* 예약하기 상세 모달 */}
      <div id='reserveModal'>
        <ReserveModal
          visible={reserveModalVisible}
          onCancel={handleReserveModalClose}
          isMobile={isMobile}
          selectedId={selectedId}
        />
      </div>
    </>
  );
};

export default BuildingModal;
