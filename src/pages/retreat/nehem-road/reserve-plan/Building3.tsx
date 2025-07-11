import React, { useState } from 'react';
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
  Tooltip,
} from './Building3.styles';

interface TooltipData {
  x: number;
  y: number;
  text: string;
}

interface BuildingProps {
  isRotate: boolean;
}

const Building1 = ({ isRotate }: BuildingProps) => {
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

  return (
    // 미스바 성전(본관)
    <Wrapper onClick={hideTooltip}>
      {/* 1층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>미스바 성전(본관) (1F)</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Col width={'10%'}>
              <RoomDisabled width={'100%'} height={'200px'}>
                현관
              </RoomDisabled>
            </Col>
            <Col width={'80%'}>
              <Row>
                <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
                  기억나니? ...
                </Room>
                <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
                  기억나니? ...
                </Room>
                <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
                  장인의 손길
                </Room>
                <Room width={'24%'} height={'80px'} onClick={(e) => showTooltip(e, '')}>
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

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>

      {/* 2층 */}
      <Floor rotate={isRotate.toString()}>
        <FloorTitle>미스바 성전(본관) (2F)</FloorTitle>
        <FloorContent height={'250px'} rotate={isRotate.toString()}>
          <Row>
            <Room width={'100%'} height={'250px'} scale={1.02} onClick={(e) => showTooltip(e, '')}>
              네헤브릭
            </Room>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>
    </Wrapper>
  );
};

export default Building1;
