import { Spin } from 'antd';
import React, { ReactElement } from 'react';
import Content from './Content';

interface MapLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const MapLayout = ({ isLoading, setIsLoading, children }: MapLayoutProps) => {
  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='map-layout'>
        <div id='map-layout-image'></div>
        <Content>{React.cloneElement(children, { setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default MapLayout;
