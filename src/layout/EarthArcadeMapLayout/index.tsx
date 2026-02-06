import { Spin } from 'antd';
import React, { ReactElement, useState } from 'react';
import Content from './Content';
import 'assets/css/earth-arcade.css';

interface EarthArcadeMapLayoutProps {
  children: ReactElement;
}

const EarthArcadeMapLayout = (props: EarthArcadeMapLayoutProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='map-layout'>
        <div id='map-layout-image'></div>
        <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default EarthArcadeMapLayout;
