import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div id='missionary-market-game-layout-content'>{children}</div>;
};

export default Content;
