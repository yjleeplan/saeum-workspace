import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div id='prayer-altar-content'>{children}</div>;
};

export default Content;
