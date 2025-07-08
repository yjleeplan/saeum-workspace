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

const Row = styled.div<{
  height?: string;
}>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : '100%')};
`;

const Col = styled.div<{
  width: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: 100%;
  background: #8c8c8c;
`;

const Col2 = styled.div<{
  width: string;
}>`
  position: relative;
  top: -20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: 80%;
  background: #8c8c8c;
`;

const Room = styled.div<{
  width: string;
  height: string;
  z?: number;
  background?: string;
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
  width: 40%;
`;

const ToiletWomen = styled.img.attrs({
  src: '/src/assets/images/icon_toilet_women.png',
})`
  width: 40%;
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

const Building2: React.FC = () => {
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
    // 로뎀의 집
    <Wrapper onClick={hideTooltip}>
      {/* 1층 */}
      <Floor>
        <FloorTitle>로뎀의 집 (1F)</FloorTitle>
        <FloorContent height={'220px'}>
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
                <Room width={'43%'} height={'100%'}>
                  벽돌을 지켜라
                </Room>
              </Row>
            </Col>
            <Col2 width={'40%'}>
              <Row>
                <Room width={'100%'} height={'100%'}>
                  경로를 재탐색합니다
                </Room>
              </Row>
            </Col2>
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
        <FloorTitle>로뎀의 집 (2F)</FloorTitle>
        <FloorContent height={'220px'}>
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
                <Room width={'43%'} height={'100%'}>
                  파수꾼의 계산법
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

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>

      {/* 3층 */}
      <Floor>
        <FloorTitle>로뎀의 집 (3F)</FloorTitle>
        <FloorContent height={'220px'}>
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
                <Room width={'75%'} height={'80px'}>
                  집 밖을 나왔더니 성벽이!
                </Room>
              </Row>
              <Row height='initial'>
                <RoomDisabled width={'25%'} height={'80px'}>
                  304
                </RoomDisabled>
                <Room width={'75%'} height={'80px'}>
                  집 밖을 나왔더니 성벽이!
                </Room>
              </Row>
            </Col2>
          </Row>
        </FloorContent>

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>

      {/* 4층 */}
      <Floor>
        <FloorTitle>로뎀의 집 (4F)</FloorTitle>
        <FloorContent height={'220px'}>
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

        {tooltip && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            {tooltip.text}
          </Tooltip>
        )}
      </Floor>
    </Wrapper>
  );
};

export default Building2;
