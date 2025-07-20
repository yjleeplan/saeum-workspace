import React, { useState } from 'react';
import { Modal, message } from 'antd';
import { Reserve } from 'types/reserve';
import ReserveModal from 'components/_modal/ReserveModal';
import Building1 from 'pages/retreat/nehem-road/reserve-plan/Building1';
import Building2 from 'pages/retreat/nehem-road/reserve-plan/Building2';
import Building3 from 'pages/retreat/nehem-road/reserve-plan/Building3';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
  isMobile: boolean;
  selectedKey: string | undefined;
}

const BuildingModal = ({ visible, onCancel, setIsLoading, isMobile, selectedKey }: ModalProps) => {
  const [reserveInfo, setReserveInfo] = useState<Reserve | undefined>(undefined);
  const [reserveModalVisible, setResrveModalVisible] = useState<boolean>(false);

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  // 예약하기 상세 모달 오픈
  const handleReserveModalOpen = (data: Reserve) => {
    setReserveInfo(data);
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
        <>
          {selectedKey === '1' && <Building1 isRotate={true} onClick={handleReserveModalOpen} />}
          {selectedKey === '2' && <Building2 isRotate={true} onClick={handleReserveModalOpen} />}
          {selectedKey === '3' && <Building3 isRotate={true} onClick={handleReserveModalOpen} />}
        </>
      </Modal>

      {/* 예약하기 상세 모달 */}
      <div id='reserveModal'>
        <ReserveModal
          visible={reserveModalVisible}
          onCancel={handleReserveModalClose}
          setIsLoading={setIsLoading}
          isMobile={isMobile}
          selectedInfo={reserveInfo}
        />
      </div>
    </>
  );
};

export default BuildingModal;
