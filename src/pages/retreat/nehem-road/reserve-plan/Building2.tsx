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
  Col2,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building2.styles';
import { dummyData } from '../reserve-theme/dummy-data';

interface BuildingProps {
  isRotate: boolean;
  onClick: (data: Reserve) => void;
}

// 로뎀의 집
const Building2 = ({ isRotate, onClick }: BuildingProps) => {
  // 예약정보 조회
  const getReserveInfo = (id: string) => {
    return dummyData.filter((data) => data.id === id)[0];
  };

  return (
    <Wrapper>
      {/* 4층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>4층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'32%'} height={'80px'}>
                  413
                </RoomDisabled>
                <Room width={'32%'} height={'80px'}>
                  어디로 가야헴 {'>o<'}
                </Room>
              </Row>
              <Row>
                <RoomDisabled width={'17%'} height={'100%'}>
                  401
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  401
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  402
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  402
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  403
                </RoomDisabled>
                <RoomDisabled width={'17%'} height={'100%'}>
                  403
                </RoomDisabled>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  411
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  410
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  409
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  408
                </RoomDisabled>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'25%'} height={'80px'}>
                  404
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  405
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  406
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  407
                </RoomDisabled>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 3층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>3층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'32%'} height={'80px'}>
                  313
                </RoomDisabled>
                <Room width={'32%'} height={'80px'}>
                  믿음의 타이밍
                </Room>
              </Row>
              <Row>
                <Room width={'17%'} height={'100%'}>
                  코
                </Room>
                <Room width={'17%'} height={'100%'}>
                  이
                </Room>
                <Room width={'17%'} height={'100%'}>
                  노
                </Room>
                <Room width={'17%'} height={'100%'}>
                  니
                </Room>
                <Room width={'17%'} height={'100%'}>
                  아
                </Room>
                <Room width={'17%'} height={'100%'}>
                  카페
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  311
                </RoomDisabled>
                <Room width={'75%'} height={'80px'} onClick={() => onClick(getReserveInfo('5'))}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster('5')} preview={false} />
                </Room>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'25%'} height={'80px'}>
                  304
                </RoomDisabled>
                <Room width={'75%'} height={'80px'} onClick={() => onClick(getReserveInfo('6'))}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster('6')} preview={false} />
                </Room>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>2층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletWomen />
                </RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletMen />
                </RoomDisabled>
                <RoomDisabled width={'22%'} height={'80px'}>
                  사무실
                </RoomDisabled>
              </Row>
              <Row>
                <RoomDisabled width={'30%'} height={'100%'}>
                  201
                </RoomDisabled>
                <RoomDisabled width={'30%'} height={'100%'}>
                  202
                </RoomDisabled>
                <Room width={'43%'} height={'110px'} onClick={() => onClick(getReserveInfo('4'))}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster('4')} preview={false} />
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <RoomDisabled width={'25%'} height={'80px'}>
                  208
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  207
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  206
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  205
                </RoomDisabled>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'75%'} height={'80px'}>
                  원장 사택
                </RoomDisabled>
                <RoomDisabled width={'25%'} height={'80px'}>
                  204
                </RoomDisabled>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'220px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'60%'}>
              <Row>
                <Stair width={'12%'} height={'80px'} />
                <RoomDisabled width={'12%'} height={'40px'}>
                  EV
                </RoomDisabled>
                <RoomDisabled width={'8%'} height={'40px'}></RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletWomen />
                </RoomDisabled>
                <RoomDisabled width={'21%'} height={'80px'}>
                  <ToiletMen />
                </RoomDisabled>
                <RoomDisabled width={'22%'} height={'80px'}>
                  창고
                </RoomDisabled>
              </Row>
              <Row>
                <RoomDisabled width={'30%'} height={'100%'}>
                  전기실
                </RoomDisabled>
                <RoomDisabled width={'30%'} height={'100%'}>
                  보일러실
                </RoomDisabled>
                <Room width={'43%'} height={'110px'} onClick={() => onClick(getReserveInfo('2'))}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster('2')} preview={false} />
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <Room width={'100%'} height={'176px'} onClick={() => onClick(getReserveInfo('3'))}>
                  <Image width={'100%'} height={'100%'} src={getGamePoster('3')} preview={false} />
                </Room>
              </Row>
            </Col2>
          </Row>
        </FloorContent>
      </Floor>
    </Wrapper>
  );
};

export default Building2;
