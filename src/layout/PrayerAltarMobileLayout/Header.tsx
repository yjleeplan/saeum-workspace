import { Col, Image, Row } from 'antd';
import React from 'react';
import logo from 'assets/images/logo.png';
import { HomeOutlined } from '@ant-design/icons';

const Header = () => {
  const handleClick = () => {
    window.location.href = '/dawn-worship-21th';
  };

  return (
    <div id='header'>
      <Row>
        <Col span={18}>
          <Image width={102} height={25} src={logo} preview={false} />
        </Col>
        <Col span={6} className='header-right'>
          <div className='home-icon' onClick={handleClick}>
            <HomeOutlined />
            Home
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
