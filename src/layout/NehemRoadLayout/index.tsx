import React, { ReactElement, useRef, useEffect, useState } from 'react';
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
  // overflow-y: scroll;
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
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  /** Effect */
  useEffect(() => {
    // IOS 에서는 vh 적용이 되지 않는 문제
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // 초기값 설정
    updateHeaderHeight();

    // 화면 리사이징 때마다 계산
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [headerRef.current]);

  return (
    <Wrapper>
      <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
        <div id='nehem-road-layout' style={{ background: '#333' }}>
          <Header isMobile={isMobile} headerRef={headerRef} />
          <Content headerHeight={headerHeight}>{React.cloneElement(children, { setIsLoading })}</Content>
        </div>
      </Spin>
    </Wrapper>
  );
};

export default NehemRoadLayout;
