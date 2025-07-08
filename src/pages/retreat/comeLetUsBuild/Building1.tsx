import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Floor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // perspective: 800px;
`;

const FloorTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const FloorContent = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: ${({ height }) => height};
  transform-style: preserve-3d;
  transform: rotateX(10deg) rotateY(0deg);
  background: #8c8c8c;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Corridor = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Room = styled.div<{
  width: string;
  height: string;
  background?: string;
  state?: 'open' | 'closed' | 'waiting' | 'in progress' | 'full';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.6px solid #333;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transform: translateZ(20px);
  transition: all 0.3s ease;
  cursor: pointer;
  background: ${({ background }) => (background ? background : '#fff')};
  font-weight: bold;
  padding: 4px;
  z-index: 100;

  &:hover {
    background: #ffa;
    transform: translateZ(40px) scale(1.08);
    z-index: 200;
  }
`;

const RoomDisabled = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid #333;
  background: #ddd;
  font-size: 12px;
  padding: 4px;
`;

const Stair = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid #333;
  background-size: 1px 10px;
  background-image: repeating-linear-gradient(0deg, #333, #333 1px, #ddd 1px, #fff);
`;

const ToiletMen = styled.img.attrs({
  src: '/src/assets/images/icon_toilet_men.png',
})`
  width: 50%;
`;

const ToiletWomen = styled.img.attrs({
  src: '/src/assets/images/icon_toilet_women.png',
})`
  width: 50%;
`;

const Tooltip = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  background: #333;
  color: #fff;
  padding: 8px 10px;
  border-radius: 6px;
  pointer-events: none;
  white-space: nowrap;
  font-size: 14px;
  z-index: 10;
`;

interface TooltipData {
  x: number;
  y: number;
  text: string;
}

const Building1: React.FC = () => {
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
    // 벧엘의 집
    <Wrapper onClick={hideTooltip}>
      {/* 1층 */}
      <Floor>
        <FloorTitle>벧엘의 집 (1F)</FloorTitle>
        <FloorContent height={'200px'}>
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
      <Floor>
        <FloorTitle>벧엘의 집 (2F)</FloorTitle>
        <FloorContent height={'200px'}>
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
              와! 성경이 들린다
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
