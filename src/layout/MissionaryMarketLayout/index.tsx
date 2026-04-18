import { Spin } from 'antd';
import React, { ReactElement, useState } from 'react';
import Content from './Content';
import 'assets/css/missionary-market.css';

interface MissionaryMarketLayoutProps {
  isMobile: boolean;
  children: ReactElement;
}

const MissionaryMarketLayout = (props: MissionaryMarketLayoutProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='missionary-market-layout'>
        <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default MissionaryMarketLayout;
