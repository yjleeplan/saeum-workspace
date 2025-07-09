import styled from 'styled-components';
import { Col, Image, Row } from 'antd';
import logo from 'assets/images/nehem-road/title.png';

const Wrapper = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  return (
    <Wrapper id='nehem-road-header'>
      <Row>
        <Col span={24}>
          <Image width={200} src={logo} preview={false} />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Header;
