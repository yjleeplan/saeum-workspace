import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export const Wrapper = styled.div<{ height?: number }>`
  position: fixed;
  top: ${({ height }) => (height ? height : '78')}px;
  width: 100%;
  height: ${({ height }) => (height ? `calc(var(--vh) - ${height}px)` : 'calc(100vh - 78px)')};
  overflow-y: scroll;
`;

interface ContentProps {
  headerHeight: number;
  children: ReactNode;
}

const Content = ({ headerHeight, children }: ContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  /** Effect */
  useEffect(() => {
    if (ref.current) {
      ref.current?.scrollTo(0, 0);
    }
  }, [pathname, ref.current]);

  return (
    <Wrapper id='nehem-road-content' ref={ref} height={headerHeight}>
      {children}
    </Wrapper>
  );
};

export default Content;
