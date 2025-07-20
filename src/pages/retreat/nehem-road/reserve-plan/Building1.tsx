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
  Corridor,
  Room,
  RoomDisabled,
  Stair,
  ToiletMen,
  ToiletWomen,
} from './Building1.styles';
import { dummyData } from '../reserve-theme/dummy-data';

interface BuildingProps {
  isRotate: boolean;
  onClick: (data: Reserve) => void;
}

// 벧엘의 집
const Building1 = ({ isRotate, onClick }: BuildingProps) => {
  // 예약정보 조회
  const getReserveInfo = (id: string) => {
    return dummyData.filter((data) => data.id === id)[0];
  };

  return (
    <Wrapper>
      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>2층</FloorTitle>
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'}>
              207
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              208
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              209
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              210
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <Room width={'24%'} height={'80px'} onClick={() => onClick(getReserveInfo('8'))}>
              <Image width={'100%'} height={'100%'} src={getGamePoster('8')} preview={false} />
            </Room>
            <RoomDisabled width={'24%'} height={'80px'}>
              212
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'18%'} height={'80px'}>
              201
            </RoomDisabled>
            <RoomDisabled width={'18%'} height={'80px'}>
              202
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              202
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'}>
              203
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              204
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              205
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'}>
              206
            </RoomDisabled>
          </Row>
        </FloorContent>
      </Floor>

      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>1층</FloorTitle>
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'36%'} height={'80px'}>
              믿.소.사.예~
            </Room>
            <RoomDisabled width={'12%'} height={'80px'}>
              <ToiletWomen />
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <RoomDisabled width={'12%'} height={'80px'}>
              <ToiletMen />
            </RoomDisabled>
            <RoomDisabled width={'36%'} height={'80px'}>
              106
            </RoomDisabled>
          </Row>
          <Row>
            <Room width={'24%'} height={'80px'} onClick={() => onClick(getReserveInfo('9'))}>
              <Image width={'100%'} height={'100%'} src={getGamePoster('9')} preview={false} />
            </Room>
            <Room width={'24%'} height={'80px'} onClick={() => onClick(getReserveInfo('10'))}>
              <Image width={'100%'} height={'100%'} src={getGamePoster('10')} preview={false} />
            </Room>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'24%'} height={'80px'}>
              103
            </RoomDisabled>
            <RoomDisabled width={'24%'} height={'80px'}>
              104
            </RoomDisabled>
          </Row>
        </FloorContent>
      </Floor>

      {/* 3층 */}
      {/* <Floor>
        <FloorTitle>벧엘의 집 (3F)</FloorTitle>
        <FloorContent height={'200px'}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} >
              309
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              310
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              311
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              312
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <RoomDisabled width={'12%'} height={'80px'} >
              313
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              314
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              315
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              316
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} >
              301
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              302
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              303
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              304
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'} >
              305
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              306
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              307
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} >
              308
            </RoomDisabled>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor> */}
    </Wrapper>
  );
};

export default Building1;
