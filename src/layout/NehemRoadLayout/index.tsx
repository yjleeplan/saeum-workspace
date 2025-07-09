import React, { ReactElement } from 'react';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';

interface NehemRoadLayoutProps {
  isMobile: boolean;
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const NehemRoadLayout = ({ isMobile, isLoading, setIsLoading, children }: NehemRoadLayoutProps) => {
  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='nehem-road-layout' style={{ background: '#333' }}>
        <Header isMobile={isMobile} />
        <Content>{React.cloneElement(children, { setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default NehemRoadLayout;
