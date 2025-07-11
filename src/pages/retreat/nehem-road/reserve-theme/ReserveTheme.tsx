import { useState } from 'react';
import { Image } from 'antd';
import { dummyData } from './dummy-data';
import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';
import posterGame3 from 'assets/images/nehem-road/poster_game3.png';
import posterGame4 from 'assets/images/nehem-road/poster_game4.png';
import ReserveModal from 'components/_modal/ReserveModal';
import { Reserve } from 'types/reserve';
import {
  Wrapper,
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

const NehemRoadReserveTheme = ({ isMobile, setIsLoading }: NehemRoadReserveThemeProps) => {
  // 건물 리스트
  const options = [
    { label: '전체', value: '' },
    { label: '벧엘의 집', value: '1' },
    { label: '로뎀의 집', value: '2' },
    { label: '미스바 성전(본관)', value: '3' },
  ];

  /** State */
  const [selected, setSelected] = useState<string>('');
  const [reserveInfo, setReserveInfo] = useState<Reserve | undefined>(undefined);
  const [reserveModalVisible, setResrveModalVisible] = useState<boolean>(false);

  // 게임 포스터 이미지 소스 추출
  const getImageSource = (id: string) => {
    return {
      '1': posterGame1,
      '2': posterGame2,
      '3': posterGame3,
      '4': posterGame4,
    }[id];
  };

  // 건물 선택
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.toString());
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
    <Wrapper $ismobile={isMobile.toString()}>
      <SelectBoxWrapper>
        건물 선택 : <SelectBox placeholder='전체' options={options} value={selected} onChange={handleChange} />
      </SelectBoxWrapper>
      <GameCardWrapper>
        {dummyData
          .filter((data) => data.location === selected || selected === '')
          .map((item, index) => (
            <GameCard key={index} $ismobile={isMobile.toString()}>
              <GameImage>
                <Image width={'68%'} height={'100%'} src={getImageSource(item.id)} preview={false} />
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
                    {item.locationName}
                  </Col>
                </Row>
                <Row $pt='2px'>
                  <Col width='40%'>
                    <Span>장르: </Span>
                    {item.category}
                  </Col>
                  <Col width='30%'>
                    <Span>인원: </Span>
                    {item.people}명
                  </Col>
                  <Col width='30%'>
                    <Span>시간: </Span>
                    {item.time}분
                  </Col>
                </Row>
                <Row $pt='20px' $pb='20px'>
                  <Col width='100%' $align='center'>
                    <ButtonStyled onClick={() => handleReserveModalOpen(item)}>예약하기</ButtonStyled>
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
          setIsLoading={setIsLoading}
          isMobile={isMobile}
          selectedInfo={reserveInfo}
        />
      </div>
    </Wrapper>
  );
};

export default NehemRoadReserveTheme;
