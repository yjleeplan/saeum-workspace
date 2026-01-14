import { Spin } from 'antd';
import React, { ReactElement } from 'react';
import Content from './Content';

interface MapStatusLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const MapStatusLayout = ({ isLoading, setIsLoading, children }: MapStatusLayoutProps) => {
  return (
    <div style={{ height: '100%', background: '#fafafa' }}>
      <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
        <div id='map-status-layout'>
          <Content>{React.cloneElement(children)}</Content>
        </div>
      </Spin>
    </div>
  );
};

export default MapStatusLayout;
