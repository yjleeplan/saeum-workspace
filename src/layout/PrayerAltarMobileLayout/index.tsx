import { Spin } from 'antd';
import React, { ReactElement, useState } from 'react';
import Header from './Header';
import Content from './Content';
import 'assets/css/prayer-altar.css';

interface PrayerAltarMobileLayoutProps {
  children: ReactElement;
}

const PrayerAltarMobileLayout = (props: PrayerAltarMobileLayoutProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='prayer-altar-mobile-layout'>
        <Header />
        <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default PrayerAltarMobileLayout;
