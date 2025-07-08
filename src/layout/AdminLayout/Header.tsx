import { Col, Image, Row, Tag } from 'antd';
import logo from 'assets/images/logo.png';

const Header = () => {
  return (
    <div id='header'>
      <Row>
        <Col span={18}>
          <Image width={102} height={25} src={logo} preview={false} />
        </Col>
        <Col span={6} className='header-right'>
          <Tag color='#cd201f'>관리자 모드</Tag>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
