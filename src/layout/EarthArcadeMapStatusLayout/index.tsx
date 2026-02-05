import { Spin } from 'antd';
import React, { ReactElement } from 'react';
import Content from './Content';

interface EarthArcadeMapStatusLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const EarthArcadeMapStatusLayout = ({ isLoading, setIsLoading, children }: EarthArcadeMapStatusLayoutProps) => {
  return (
    <div style={{ height: '100%', background: '#fafafa' }}>
      <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
        <div id='map-status-layout'>
          <Content>{children}</Content>
        </div>
      </Spin>
    </div>
  );
};

export default EarthArcadeMapStatusLayout;
