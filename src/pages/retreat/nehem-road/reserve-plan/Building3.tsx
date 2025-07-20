import React from 'react';
import { Image } from 'antd';
import { Reserve } from 'types/reserve';
import { getGamePoster } from 'utils/getGamePoster';
import {
  Wrapper,
  Floor,
  FloorTitle,
  FloorContent,
  Row,
  Col,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building3.styles';
import { dummyData } from '../reserve-theme/dummy-data';

interface BuildingProps {
  isRotate: boolean;

  onClick: (data: Reserve) => void;
}

// 미스바 성전(본관)
const Building3 = ({ isRotate, onClick }: BuildingProps) => {
  // 예약정보 조회
  const getReserveInfo = (id: string) => {
    return dummyData.filter((data) => data.id === id)[0];
  };

  return (
    <Wrapper>
      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>2층</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'100%'} height={'250px'} scale={1.02} onClick={() => onClick(getReserveInfo('1'))}>
              <Image width={'100%'} height={'100%'} src={getGamePoster('1')} preview={false} />
            </Room>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'10%'}>
              <RoomDisabled width={'100%'} height={'200px'}>
                현관
              </RoomDisabled>
            </Col>
            <Col width={'80%'}>
              <Row>
                <Room width={'24%'} height={'80px'}>
                  기억나니? ...
                </Room>
                <Room width={'24%'} height={'80px'}>
                  기억나니? ...
                </Room>
                <Room width={'24%'} height={'80px'}>
                  장인의 손길
                </Room>
                <Room width={'24%'} height={'80px'}>
                  장인의 손길
                </Room>
                <RoomDisabled width={'4%'} height={'80px'}></RoomDisabled>
              </Row>
              <Row>
                <RoomDisabled width={'100%'} height={'170px'}>
                  식당
                </RoomDisabled>
              </Row>
            </Col>
            <Col width={'10%'}>
              <RoomDisabled width={'100%'} height={'80px'}></RoomDisabled>
              <Stair width={'100%'} height={'16px'} />
              <RoomDisabled width={'100%'} height={'40px'}>
                <ToiletWomen />
              </RoomDisabled>
              <RoomDisabled width={'100%'} height={'40px'}>
                <ToiletMen />
              </RoomDisabled>
              <Stair width={'100%'} height={'16px'} />
              <RoomDisabled width={'100%'} height={'30px'}></RoomDisabled>
            </Col>
          </Row>
        </FloorContent>
      </Floor>
    </Wrapper>
  );
};

export default Building3;
