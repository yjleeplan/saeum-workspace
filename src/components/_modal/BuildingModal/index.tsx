import React, { useState } from 'react';
import { Modal, Spin } from 'antd';
import ReserveModal from 'components/_modal/ReserveModal';
import Building1 from 'pages/retreat/nehem-road/reserve-plan/Building1';
import Building2 from 'pages/retreat/nehem-road/reserve-plan/Building2';
import Building3 from 'pages/retreat/nehem-road/reserve-plan/Building3';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  isMobile: boolean;
  selectedKey: string | undefined;
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
        title={
          selectedKey === '1'
            ? '벧엘의 집'
            : selectedKey === '2'
              ? '로뎀의 집'
              : selectedKey === '3'
                ? '미스바 성전(본관)'
                : '기타'
        }
        open={visible}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
        // getContainer={document.getElementById('reserveModal') ?? false}
        destroyOnClose
      >
        <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
          {selectedKey === '1' && (
            <Building1 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === '2' && (
            <Building2 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
          )}
          {selectedKey === '3' && (
            <Building3 isRotate={true} onClick={handleReserveModalOpen} setIsLoading={setIsLoading} />
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
