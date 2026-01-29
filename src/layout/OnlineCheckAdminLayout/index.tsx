import React, { useState, ReactElement } from 'react';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';

interface OnlineCheckAdminLayoutProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const OnlineCheckAdminLayout = ({ isLoading, setIsLoading, children }: OnlineCheckAdminLayoutProps) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='main-layout'>
        <Header />
        <Content>{React.cloneElement(children, { setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default OnlineCheckAdminLayout;
