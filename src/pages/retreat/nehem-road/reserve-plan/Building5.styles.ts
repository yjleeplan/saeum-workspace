import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Floor = styled.div<{ rotate: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  perspective: ${({ rotate }) => (rotate === 'true' ? 'none' : '800px')};
`;

export const FloorTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const FloorContent = styled.div<{ height: string; rotate: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: ${({ height }) => height};
  transform-style: ${({ rotate }) => (rotate === 'true' ? 'none' : 'preserve-3d')};
  transform: ${({ rotate }) => (rotate === 'true' ? 'none' : 'rotateX(60deg) rotateY(0deg)')};
  background: #8c8c8c;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Room = styled.div<{
  width: string;
  height: string;
  background?: string;
  state?: 'open' | 'closed' | 'waiting' | 'in progress' | 'full';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1.6px solid #333;
  box-shadow: 0 4px 10px rgb(0 0 0 / 30%);
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
    transform: translateZ(40px) scale(1.02);
    z-index: 200;
  }
`;
