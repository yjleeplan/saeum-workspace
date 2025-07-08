import React, { ReactElement } from 'react';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';

interface ComeLetUsBuildLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const ComeLetUsBuildLayout = ({ isLoading, setIsLoading, children }: ComeLetUsBuildLayoutProps) => {
  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='come-let-us-build-layout' style={{ background: '#333' }}>
        <Header />
        <Content>{React.cloneElement(children, { setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default ComeLetUsBuildLayout;
