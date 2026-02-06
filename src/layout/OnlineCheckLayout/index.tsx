import React, { ReactElement, useState } from 'react';
import { Spin } from 'antd';
import Content from './Content';
import Header from './Header';
import 'assets/css/online-check.css';
import 'assets/css/online-check-service.css';

interface OnlineCheckLayoutProps {
  serviceName: string;
  isAdmin?: boolean;
  adminButtonText?: string;
  adminButtonLink?: string;
  children: ReactElement;
}

const OnlineCheckLayout = (props: OnlineCheckLayoutProps) => {
  const { serviceName, isAdmin, adminButtonText, adminButtonLink, children } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Spin spinning={isLoading} tip='잠시만 기다려주세요..'>
      <div id='main-layout' className={`main-layout-${serviceName}`}>
        <Header isAdmin={isAdmin} adminButtonText={adminButtonText} adminButtonLink={adminButtonLink} />
        <Content>{React.cloneElement(children, { ...props, isLoading, setIsLoading })}</Content>
      </div>
    </Spin>
  );
};

export default OnlineCheckLayout;
