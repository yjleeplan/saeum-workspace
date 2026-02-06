import { Col, Image, Row, Tag } from 'antd';
import logo from 'assets/images/logo.png';

interface HeaderProps {
  isAdmin?: boolean;
  adminButtonText?: string;
  adminButtonLink?: string;
}
const Header = ({ isAdmin, adminButtonText = '관리자 모드', adminButtonLink = '' }: HeaderProps) => {
  const handleClick = () => {
    if (adminButtonLink) {
      window.location.href = adminButtonLink;
    }
  };

  return (
    <div id='header'>
      <Row>
        <Col span={18}>
          <Image width={102} height={25} src={logo} preview={false} />
        </Col>
        {isAdmin && (
          <Col span={6} className='header-right'>
            <Tag color='#cd201f' onClick={handleClick}>
              {adminButtonText}
            </Tag>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Header;
