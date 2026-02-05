import { Spin } from 'antd';
import React, { ReactElement } from 'react';
import Content from './Content';

interface EarthArcadeMapLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const EarthArcadeMapLayout = ({ isLoading, setIsLoading, children }: EarthArcadeMapLayoutProps) => {
  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='map-layout'>
        <div id='map-layout-image'></div>
        <Content>{children}</Content>
      </div>
    </Spin>
  );
};

export default EarthArcadeMapLayout;
