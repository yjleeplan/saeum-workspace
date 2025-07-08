import styled from 'styled-components';
import { Col, Image, Row, Tag } from 'antd';
import logo from 'assets/images/logo.png';

const Wrapper = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  return (
    <Wrapper id='come-let-us-build-header'>
      <Row>
        <Col span={24}>{/* <Image width={102} height={25} src={logo} preview={false} /> */}Come, let us build</Col>
      </Row>
    </Wrapper>
  );
};

export default Header;
