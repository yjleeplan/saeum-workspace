import React, { ReactElement } from 'react';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';

interface OnlineCheckLayoutProps {
  serviceName: string;
  isLoading: boolean;
  isAdmin?: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const OnlineCheckLayout = ({ serviceName, isLoading, isAdmin, setIsLoading, children }: OnlineCheckLayoutProps) => {
  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='main-layout' className={`main-layout-${serviceName}`}>
        <Header isAdmin={isAdmin} />
        <Content>{React.cloneElement(children, { setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default OnlineCheckLayout;
