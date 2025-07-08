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
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div<{
  width: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  height: 100%;
`;

const Room = styled.div<{
  width: string;
  height: string;
  z?: number;
  background?: string;
  scale?: number;
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
    transform: ${({ scale }) => (scale ? `translateZ(40px) scale(${scale})` : 'translateZ(40px) scale(1.08)')};
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
  background-size: 10px 1px;
  background-image: repeating-linear-gradient(to right, #333, #333 1px, #fff 1px, #fff);
`;

const ToiletMen = styled.img.attrs({
  src: '/src/assets/images/icon_toilet_men.png',
})`
  width: 30%;
`;

const ToiletWomen = styled.img.attrs({
  src: '/src/assets/images/icon_toilet_women.png',
})`
  width: 30%;
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
    // 미스바 성전(본관)
    <Wrapper onClick={hideTooltip}>
      {/* 1층 */}
      <Floor>
        <FloorTitle>미스바 성전(본관) (1F)</FloorTitle>
        <FloorContent height={'250px'}>
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
      <Floor>
        <FloorTitle>미스바 성전(본관) (2F)</FloorTitle>
        <FloorContent height={'250px'}>
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
