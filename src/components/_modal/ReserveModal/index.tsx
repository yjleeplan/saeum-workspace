import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Modal, Image, message, Spin } from 'antd';
import styled from 'styled-components';
import { queries } from 'api/queries';
import { usePostReserve } from 'api/useReserveApi';
import type { PostReserveRequest, GameTime } from 'types';
import { getGamePoster } from 'utils/getGamePoster';
import UserNameModal from './UserNameModal';

const GameCard = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '100%')};
  margin-bottom: 40px;
  // max-height: calc(var(--vh) - 200px);
  // overflow-y: auto;
  // padding: 0 24px;
`;

const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const GameContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5%;
  width: 100%;
  padding: 10px 0;
`;

const GameTimeBox = styled.div<{ $enable?: number }>`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  padding: 8px;
  background: ${({ $enable }) => ($enable === 1 ? '#F0A721' : '#808080')};
  border: ${({ $enable }) => ($enable === 1 ? '1px solid #F0A721' : '1px solid #808080')};
  cursor: pointer;
  margin-bottom: 0.5%;

  ${(props) =>
    props.$enable === 1 &&
    `&:hover {
    background: #fff !important;
    color: #0d0a09 !important;
    border: 1px solid;
  }`}
`;

const Row = styled.div<{ $pt?: string; $pb?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ $pt }) => ($pt ? $pt : '0px')};
  padding-bottom: ${({ $pb }) => ($pb ? $pb : '0px')};
`;

const Col = styled.div<{
  width: string;
  $align?: string;
  $font?: string;
  $fw?: string;
}>`
  display: flex;
  justify-content: ${({ $align }) => ($align ? $align : 'start')};
  align-items: center;
  width: ${({ width }) => width};
  height: 100%;
  font-size: ${({ $font }) => ($font ? $font : '15px')};
  font-weight: ${({ $fw }) => ($fw ? $fw : '')};
  padding: 0 6px;
`;

const Span = styled.span`
  color: #ccc;
  font-size: 13px;
  margin-right: 4px;
`;

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  isMobile: boolean;
  selectedId: number | undefined;
}

const ReserveModal = ({ visible, onCancel, isMobile, selectedId }: ModalProps) => {
  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userNameModal, setUserNameModal] = useState<boolean>(false);
  const [selectedGameTime, setSelectedGameTime] = useState<GameTime | undefined>();

  // 게임 상세 정보 조회 API
  const {
    data: gameInfoQueryData,
    refetch: refetchGameInfo,
    isSuccess: gameInfoQuerySuccess,
    isFetching: gameInfoFetching,
  } = useQuery({
    ...queries.game.info({
      id: selectedId,
    }),
    staleTime: 500,
    cacheTime: 1000,
    enabled: selectedId !== undefined,
  });

  // 게임 상세 정보 데이터 세팅
  const gameInfo = useMemo(() => {
    if (gameInfoQuerySuccess) {
      return gameInfoQueryData;
    }
  }, [gameInfoQueryData]);

  // 예약하기 API
  const { mutate: postReserve } = usePostReserve();
  const handlePostReserve = async (payload: PostReserveRequest) => {
    setIsLoading(true);

    postReserve(payload, {
      onSuccess: () => {
        refetchGameInfo();
      },
      onError: (error: any) => {
        // 공통 처리
      },
      onSettled(data, error, variables, context) {
        handleUserNameModalClose();
        onCancel();
        setIsLoading(false);
      },
    });
  };

  // 예약하기
  const handleReserve = async (data: PostReserveRequest & { user_name: string }) => {
    Modal.confirm({
      title: '예약 확인',
      content: (
        <div>
          <div style={{ marginTop: '10px' }}>
            <span style={{ color: '#808080' }}>- </span>
            {gameInfo?.name}
          </div>
          <div>
            <span style={{ color: '#808080' }}>- </span>
            {gameInfo?.location_name_display}
          </div>
          <div>
            <span style={{ color: '#808080' }}>- </span>
            {`${data?.game_start_time} ~ ${data?.game_end_time}`}
          </div>
          <div style={{ marginTop: '20px' }}>
            <span style={{ color: '#f50', fontWeight: 'bold', fontSize: '16px' }}>{data?.user_name}</span>{' '}
            예약하시겠습니까?
          </div>
        </div>
      ),
      okText: '확인',
      cancelText: '취소',
      onOk: async () => {
        handlePostReserve({
          user_id: data.user_id,
          game_time_id: data.game_time_id,
          game_start_time: data.game_start_time,
          game_end_time: data.game_end_time,
        });
      },
    });
  };

  // 조 입력 모달 열기
  const handleUserNameModalOpen = (data: GameTime) => {
    setSelectedGameTime(data);
    setUserNameModal(true);
  };

  // 조 입력 모달 닫기
  const handleUserNameModalClose = () => {
    setUserNameModal(false);
  };

  // 닫기
  const handleCancel = () => {
    onCancel();
  };

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (gameInfoFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, gameInfoFetching]);

  return (
    <>
      <Modal
        wrapClassName='reserve-modal-wrap'
        title={
          <>
            <Row>
              <Col width='100%' $align='center' $font='20px' $fw='bold'>
                {gameInfo?.name}
              </Col>
            </Row>
            <Row $pt='10px'>
              <Col width='100%' $align='center' $font='17px'>
                {gameInfo?.location_name_display}
              </Col>
            </Row>
            <Row $pt='4px'>
              <Col width='39%' $font={isMobile ? '14px' : '16px'} $align='center'>
                <Span>장르: </Span>
                {gameInfo?.category}
              </Col>
              <Col width='31%' $font={isMobile ? '14px' : '16px'} $align='center'>
                <Span>인원: </Span>
                {gameInfo?.people}
              </Col>
              <Col width='30%' $font={isMobile ? '14px' : '16px'} $align='center'>
                <Span>시간: </Span>
                {gameInfo?.play_time}분
              </Col>
            </Row>
          </>
        }
        open={visible}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
        // getContainer={document.getElementById('reserveModal') ?? false}
        forceRender
        destroyOnClose
      >
        <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
          <GameCard $ismobile={isMobile.toString()}>
            <GameImage>
              <Image width={'100%'} height={'100%'} src={getGamePoster(gameInfo?.id ?? 0)} preview={false} />
            </GameImage>
            <GameContent>
              {gameInfo?.time_list?.map((item, index) => {
                return (
                  <GameTimeBox key={index} $enable={item.is_possible} onClick={() => handleUserNameModalOpen(item)}>
                    <Row>
                      <Col width='100%' $align='center' $font='20px' $fw='bold'>
                        {item.game_start_time}
                      </Col>
                    </Row>
                    <Row>
                      <Col width='100%' $align='center' $font='16px'>
                        {item.is_possible ? '예약가능' : '예약마감'}
                      </Col>
                    </Row>
                  </GameTimeBox>
                );
              })}
            </GameContent>
          </GameCard>
        </Spin>
      </Modal>

      {/* 조 입력 모달 */}
      <UserNameModal
        visible={userNameModal}
        onOk={handleReserve}
        onCancel={handleUserNameModalClose}
        isMobile={isMobile}
        gameTimeData={selectedGameTime}
      />
    </>
  );
};

export default ReserveModal;
