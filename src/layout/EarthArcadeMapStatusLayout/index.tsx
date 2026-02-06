import { Spin } from 'antd';
import React, { ReactElement, useState } from 'react';
import Content from './Content';
import 'assets/css/earth-arcade.css';

interface EarthArcadeMapStatusLayoutProps {
  children: ReactElement;
}

const EarthArcadeMapStatusLayout = (props: EarthArcadeMapStatusLayoutProps) => {
  const { children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div style={{ height: '100%', background: '#fafafa' }}>
      <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
        <div id='map-status-layout'>
          <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
        </div>
      </Spin>
    </div>
  );
};

export default EarthArcadeMapStatusLayout;
