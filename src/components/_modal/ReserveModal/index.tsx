import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Modal, Image, message, Spin } from 'antd';
import styled from 'styled-components';
import { queries } from 'api/queries';
import { getGamePoster } from 'utils/getGamePoster';

export const GameCard = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '100%')};
  margin-bottom: 40px;
  // max-height: calc(var(--vh) - 200px);
  // overflow-y: auto;
  // padding: 0 24px;
`;

export const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GameContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5%;
  width: 100%;
  padding: 10px 0;
`;

export const GameTime = styled.div<{ $enable?: number }>`
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

export const Row = styled.div<{ $pt?: string; $pb?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ $pt }) => ($pt ? $pt : '0px')};
  padding-bottom: ${({ $pb }) => ($pb ? $pb : '0px')};
`;

export const Col = styled.div<{
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

export const Span = styled.span`
  color: #ccc;
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

  // 예약하기
  const handleClick = () => {
    message.error('준비중입니다.');
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
            <Col width='37%' $font={isMobile ? '14px' : '16px'}>
              <Span>장르: </Span>
              {gameInfo?.category}
            </Col>
            <Col width='33%' $font={isMobile ? '14px' : '16px'}>
              <Span>인원: </Span>
              {gameInfo?.people}
            </Col>
            <Col width='30%' $font={isMobile ? '14px' : '16px'} $align='end'>
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
                <GameTime key={index} $enable={item.is_possible} onClick={handleClick}>
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
                </GameTime>
              );
            })}
          </GameContent>
        </GameCard>
      </Spin>
    </Modal>
  );
};

export default ReserveModal;
