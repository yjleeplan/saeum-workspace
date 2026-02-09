import { useState, useEffect } from 'react';
import { Modal, message, Input } from 'antd';
import type { PostReserveRequest, GameTime } from 'types';
import { USER_LIST, USER_LIST_DEV } from 'pages/retreat/nehem-road/config/config';
import { Wrapper, TextWrapper, InputWrapper } from './UserNameModal.styles';

interface UserNameModalProps {
  visible: boolean;
  onOk: (data: PostReserveRequest & { user_name: string }) => void;
  onCancel: () => void;
  isMobile: boolean;
  gameTimeData?: GameTime | undefined;
}

const UserNameModal = ({ visible, onOk, onCancel, isMobile, gameTimeData }: UserNameModalProps) => {
  /** State */
  const [userNameValue, setUserNameValue] = useState<string>('');

  // 조 이름 Change
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(e.target.value);
  };

  // 예약하기
  const handleReserve = () => {
    if (!userNameValue) {
      message.warning('조를 입력해주세요.', 1.2);
      return;
    }

    const env = `${import.meta.env.VITE_APP_ENV}`;
    const userList = env === 'production' ? USER_LIST : USER_LIST_DEV;
    const userId = userList.filter((item) => item.name === `${userNameValue}조`)[0]?.id;

    if (!userId) {
      message.error('존재하지 않는 조입니다.');
      return;
    }

    onOk({
      user_id: userId,
      user_name: `${userNameValue}조`,
      game_time_id: gameTimeData?.game_time_id,
      game_start_time: gameTimeData?.game_start_time,
      game_end_time: gameTimeData?.game_end_time,
    });
  };

  /** Effect */
  useEffect(() => {
    if (visible) {
      setUserNameValue('');
    }
  }, [visible]);

  return (
    <Modal
      wrapClassName='reserve-username-modal-wrap'
      title='예약하기'
      open={visible}
      onOk={handleReserve}
      onCancel={onCancel}
      okText='예약'
      cancelText='취소'
      maskClosable={false}
      maskStyle={{ zIndex: 1006, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      destroyOnClose
    >
      <Wrapper>
        <TextWrapper>조 입력 : </TextWrapper>
        <InputWrapper>
          <Input
            type='number'
            inputMode='numeric'
            pattern='[0-9]*'
            placeholder='조를 입력해주세요'
            value={userNameValue}
            onChange={handleUserNameChange}
          />
        </InputWrapper>
      </Wrapper>
    </Modal>
  );
};

export default UserNameModal;
