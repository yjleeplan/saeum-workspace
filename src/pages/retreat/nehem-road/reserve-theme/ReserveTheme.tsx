import { useState, useMemo, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'antd';
import { queries } from 'api/queries';
import ReserveModal from 'components/_modal/ReserveModal';
import { LOCATION_LIST } from 'context/Context';
import { getGamePoster } from 'utils/getGamePoster';
import {
  Wrapper,
  TitleWrapper,
  Title,
  SelectBoxWrapper,
  SelectBox,
  GameCardWrapper,
  GameCard,
  GameImage,
  GameContent,
  Row,
  Col,
  Span,
  ButtonStyled,
} from './ReserveTheme.styles';

interface NehemRoadReserveThemeProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadReserveTheme = () => {
  const { isMobile, setIsLoading }: NehemRoadReserveThemeProps = useOutletContext();

  /** State */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [selectedGameId, setSelectedGameId] = useState<number | undefined>(undefined);
  const [reserveModalVisible, setResrveModalVisible] = useState<boolean>(false);

  // 게임 목록 조회 API
  const {
    data: gameListQueryData = [],
    refetch: refetchGameList,
    isSuccess: gameListQuerySuccess,
    isFetching: gameListFetching,
  } = useQuery({
    ...queries.game.list({
      location_id: '',
    }),
    staleTime: 500,
    cacheTime: 1000,
  });

  // 게임 목록 데이터 세팅
  const gameList = useMemo(() => {
    if (gameListQuerySuccess) {
      return gameListQueryData;
    }
  }, [gameListQueryData]);

  // 건물 선택
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e));
  };

  // 예약하기 상세 모달 오픈
  const handleReserveModalOpen = (id: number) => {
    setSelectedGameId(id);
    setResrveModalVisible(true);
  };

  // 예약하기 상세 모달 닫기
  const handleReserveModalClose = () => {
    setResrveModalVisible(false);
  };

  /** Effect */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (gameListFetching) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, gameListFetching]);

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Reservation</Title>
      </TitleWrapper>
      <SelectBoxWrapper $ismobile={isMobile.toString()}>
        건물 선택 :
        <SelectBox
          placeholder='전체'
          options={LOCATION_LIST}
          value={selected}
          onChange={handleChange}
          $ismobile={isMobile.toString()}
        />
      </SelectBoxWrapper>
      <GameCardWrapper>
        {gameList
          ?.filter((data) => data?.location_parent_id === selected || selected === 0)
          ?.map((item, index) => (
            <GameCard key={index} $ismobile={isMobile.toString()}>
              <GameImage>
                <Image width={'68%'} height={'100%'} src={getGamePoster(item.id)} preview={false} />
              </GameImage>
              <GameContent>
                <Row>
                  <Col width='100%' $align='center' $font='22px' $fw='bold'>
                    {item.name}
                  </Col>
                </Row>
                <Row $pt='2px'>
                  <Col width='100%' $align='center'>
                    <Span>장소: </Span>
                    {item?.location_name_display}
                  </Col>
                </Row>
                <Row $pt='2px' $justify='space-between'>
                  <Col width='39%' $align='center'>
                    <Span>장르: </Span>
                    {item?.category}
                  </Col>
                  <Col width='31%' $align='center'>
                    <Span>인원: </Span>
                    {item?.people}
                  </Col>
                  <Col width='30%' $align='center'>
                    <Span>시간: </Span>
                    {item?.play_time}분
                  </Col>
                </Row>
                <Row $pt='20px' $pb='20px'>
                  <Col width='100%' $align='center'>
                    <ButtonStyled onClick={() => handleReserveModalOpen(item.id)}>예약하기</ButtonStyled>
                  </Col>
                </Row>
              </GameContent>
            </GameCard>
          ))}
      </GameCardWrapper>

      {/* 예약하기 상세 모달 */}
      <div id='reserveModal'>
        <ReserveModal
          visible={reserveModalVisible}
          onCancel={handleReserveModalClose}
          isMobile={isMobile}
          selectedId={selectedGameId}
        />
      </div>
    </Wrapper>
  );
};

export default NehemRoadReserveTheme;
