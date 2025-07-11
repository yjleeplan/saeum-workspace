import React, { useState } from 'react';
import { Reserve } from 'types/reserve';
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
  Tooltip,
} from './Building1.styles';
import { dummyData } from '../reserve-theme/dummy-data';

interface TooltipData {
  x: number;
  y: number;
  text: string;
}

interface BuildingProps {
  isRotate: boolean;
  onClick: (data: Reserve) => void;
}

const Building1 = ({ isRotate, onClick }: BuildingProps) => {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const showTooltip = (event: React.MouseEvent, text: string) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2 - 50,
      y: rect.top - 30,
      text,
    });
  };

  const hideTooltip = () => setTooltip(null);

  const getReserveInfo = (id: string) => {
    return dummyData.filter((data) => data.id === id)[0];
  };

  return (
    // 벧엘의 집
    <Wrapper onClick={hideTooltip}>
      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>벧엘의 집 (1F)</FloorTitle>
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'36%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
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
            <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              네헴의 4번타자
            </Room>
            <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              네헴의 4번타자
            </Room>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              103
            </RoomDisabled>
            <RoomDisabled width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              104
            </RoomDisabled>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>

      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>벧엘의 집 (2F)</FloorTitle>
        <FloorContent height={'200px'} rotate={isRotate.toString()}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              207
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              208
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              209
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              210
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              와 성경이 들린다
            </Room>
            <RoomDisabled width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              212
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'18%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              201
            </RoomDisabled>
            <RoomDisabled width={'18%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              202
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              202
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              203
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              204
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              205
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              206
            </RoomDisabled>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>

      {/* 3층 */}
      {/* <Floor>
        <FloorTitle>벧엘의 집 (3F)</FloorTitle>
        <FloorContent height={'200px'}>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              309
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              310
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              311
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              312
            </RoomDisabled>
            <Stair width={'12%'} height={'80px'} />
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              313
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              314
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              315
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              316
            </RoomDisabled>
          </Row>
          <Row>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              301
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              302
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              303
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              304
            </RoomDisabled>
            <Corridor width={'12%'} height={'80px'}></Corridor>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              305
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              306
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
              307
            </RoomDisabled>
            <RoomDisabled width={'12%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
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
