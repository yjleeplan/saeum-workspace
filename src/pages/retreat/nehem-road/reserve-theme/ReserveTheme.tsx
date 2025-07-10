import { Select, Button, Image } from 'antd';
import styled from 'styled-components';
import { dummyData } from './dummy-data';
import posterGame1 from 'assets/images/nehem-road/poster_game1.png';
import posterGame2 from 'assets/images/nehem-road/poster_game2.png';

export const Wrapper = styled.div<{ ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ ismobile }) => (ismobile === 'true' ? '100%' : '60%')};
  margin: 0 auto;
  padding: 30px 20px;
  color: #fff;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SelectBox = styled(Select)`
  display: flex;
  width: 240px;
  height: 40px;
  margin-left: 10px;
  font-size: 18px;
`;

export const GameCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`;

export const Row = styled.div<{ py?: string }>`
  display: flex;
  width: 100%;
  padding-top: ${({ py }) => (py ? py : '0px')};
  padding-bottom: ${({ py }) => (py ? py : '0px')};
`;

export const Col = styled.div<{
  width: string;
  align?: string;
  font?: string;
}>`
  display: flex;
  justify-content: ${({ align }) => (align ? align : 'start')};
  align-items: center;
  width: ${({ width }) => width};
  height: 100%;
  font-size: ${({ font }) => (font ? font : '15px')};
  padding: 0 8px;
`;

export const Span = styled.span`
  color: #ccc;
  margin-right: 4px;
`;

export const ButtonStyled = styled(Button)`
  width: 60%;
  height: 40px;
  background: #000;
  font-size: 18px;
  color: #fff;
`;

interface NehemRoadReserveThemeProps {
  isMobile: boolean;
}

const NehemRoadReserveTheme = ({ isMobile }: NehemRoadReserveThemeProps) => {
  // 건물 리스트
  const options = [
    { label: '전체', value: '' },
    { label: '벧엘의 집', value: '1' },
    { label: '로뎀의 집', value: '2' },
    { label: '미스바 성전(본관)', value: '3' },
  ];

  // 게임 포스터 이미지 소스 추출
  const getImageSource = (id: string) => {
    return {
      '1': posterGame1,
      '2': posterGame2,
    }[id];
  };

  return (
    <Wrapper ismobile={isMobile.toString()}>
      <SelectBoxWrapper>
        건물 선택 : <SelectBox placeholder='전체' options={options} />
      </SelectBoxWrapper>
      <GameCardWrapper>
        {dummyData.map((item, index) => (
          <GameCard key={index}>
            <GameImage>
              <Image width={'68%'} height={'100%'} src={getImageSource(item.id)} preview={false} />
            </GameImage>
            <GameContent>
              <Row>
                <Col width='100%' align='center' font='20px'>
                  {item.name}
                </Col>
              </Row>
              <Row>
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
              <Row py='20px'>
                <Col width='100%' align='center'>
                  <ButtonStyled>예약하기</ButtonStyled>
                </Col>
              </Row>
            </GameContent>
          </GameCard>
        ))}
      </GameCardWrapper>
    </Wrapper>
  );
};

export default NehemRoadReserveTheme;
