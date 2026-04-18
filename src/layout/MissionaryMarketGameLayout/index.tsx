import { Spin } from 'antd';
import React, { ReactElement, useState } from 'react';
import Content from './Content';
import 'assets/css/missionary-market.css';

interface MissionaryMarketGameLayoutProps {
  gameName: string;
  children: ReactElement;
}

const MissionaryMarketGameLayout = (props: MissionaryMarketGameLayoutProps) => {
  const { gameName = '', children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='missionary-market-game-layout' className={gameName}>
        <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default MissionaryMarketGameLayout;
