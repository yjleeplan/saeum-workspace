import React from 'react';
import { Modal, Image, message } from 'antd';
import styled from 'styled-components';
import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';
import { Reserve } from 'types/reserve';

export const GameCard = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '100%')};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GameContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

export const GameTime = styled.div<{ $enable?: string }>`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  padding: 8px;
  background: ${({ $enable }) => ($enable === 'true' ? '#F0A721' : '#808080')};
  border: ${({ $enable }) => ($enable === 'true' ? '1px solid #F0A721' : '1px solid #808080')};
  cursor: pointer;

  ${(props) =>
    props.$enable === 'true' &&
    `&:hover {
    background: #fff !important;
    color: #333 !important;
    border: 1px solid;
  }`}
`;

export const Row = styled.div<{ $pt?: string; $pb?: string }>`
  display: flex;
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
  padding: 0 8px;
`;

export const Span = styled.span`
  color: #ccc;
  margin-right: 4px;
`;

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  setIsLoading: (data: boolean) => void;
  isMobile: boolean;
  selectedInfo: Reserve | undefined;
}

const ReserveModal = ({ visible, onCancel, setIsLoading, isMobile, selectedInfo }: ModalProps) => {
  // 게임 포스터 이미지 소스 추출
  const getImageSource = (id: string) => {
    return {
      '1': posterGame1,
      '2': posterGame2,
      '3': posterGame3,
      '4': posterGame4,
    }[id];
  };

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
      wrapClassName='reserve-modal-wrap'
      title={
        <>
          <Row>
            <Col width='100%' $align='center' $font='20px' $fw='bold'>
              {selectedInfo?.name}
            </Col>
          </Row>
          <Row $pt='10px'>
            <Col width='40%'>
              <Span>장르: </Span>
              {selectedInfo?.category}
            </Col>
            <Col width='30%'>
              <Span>인원: </Span>
              {selectedInfo?.people}명
            </Col>
            <Col width='30%'>
              <Span>시간: </Span>
              {selectedInfo?.time}분
            </Col>
          </Row>
        </>
      }
      open={visible}
      onCancel={handleCancel}
      footer={false}
      maskClosable={false}
      getContainer={document.getElementById('reserveModal') ?? false}
      destroyOnClose
    >
      <GameCard $ismobile={isMobile.toString()}>
        <GameImage>
          <Image width={'100%'} height={'100%'} src={getImageSource(selectedInfo?.id ?? '')} preview={false} />
        </GameImage>
        <GameContent>
          <GameTime $enable='true' onClick={handleClick}>
            <Row>
              <Col width='100%' $align='center' $font='20px' $fw='bold'>
                08 : 30
              </Col>
            </Row>
            <Row>
              <Col width='100%' $align='center' $font='16px'>
                예약가능
              </Col>
            </Row>
          </GameTime>
          <GameTime $enable='true' onClick={handleClick}>
            <Row>
              <Col width='100%' $align='center' $font='20px' $fw='bold'>
                09 : 30
              </Col>
            </Row>
            <Row>
              <Col width='100%' $align='center' $font='16px'>
                예약가능
              </Col>
            </Row>
          </GameTime>
          <GameTime $enable='false'>
            <Row>
              <Col width='100%' $align='center' $font='20px' $fw='bold'>
                10 : 30
              </Col>
            </Row>
            <Row>
              <Col width='100%' $align='center' $font='16px'>
                예약마감
              </Col>
            </Row>
          </GameTime>
        </GameContent>
      </GameCard>
    </Modal>
  );
};

export default ReserveModal;
