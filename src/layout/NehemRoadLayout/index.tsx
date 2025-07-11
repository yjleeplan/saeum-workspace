import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';
import 'assets/css/nehem-road.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

interface NehemRoadLayoutProps {
  isMobile: boolean;
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
  children: ReactElement;
}

const NehemRoadLayout = ({ isMobile, isLoading, setIsLoading, children }: NehemRoadLayoutProps) => {
  return (
    <Wrapper>
      <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
        <div id='nehem-road-layout' style={{ background: '#333' }}>
          <Header isMobile={isMobile} />
          <Content>{React.cloneElement(children, { setIsLoading })}</Content>
        </div>
      </Spin>
    </Wrapper>
  );
};

export default NehemRoadLayout;
