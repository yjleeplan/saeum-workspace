import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div id='nehem-road-content' style={{ paddingTop: '55px' }}>
      {children}
    </div>
  );
};

export default Content;
