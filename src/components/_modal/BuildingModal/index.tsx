import React from 'react';
import { Modal, message } from 'antd';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
  isMobile: boolean;
  selectedKey: string | undefined;
}

const BuildingModal = ({ visible, onCancel, setIsLoading, isMobile, selectedKey }: ModalProps) => {
  // 예약하기
  const handleClick = () => {
    message.error('준비중입니다.');
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  return (
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
      <></>
    </Modal>
  );
};

export default BuildingModal;
