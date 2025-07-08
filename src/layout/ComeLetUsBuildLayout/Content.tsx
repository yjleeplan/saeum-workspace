import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div id='come-let-us-build-content'>{children}</div>;
};

export default Content;
