import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { Wrapper, Previous, Title, Content, Menu, Extra } from './Header.styles';

interface HeaderProps {
  isMobile: boolean;
}

const Header = ({ isMobile }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Previous>
        <Title width={isMobile ? '18vw' : '5vw'} />
      </Previous>
      <Content>
        {isMobile || (
          <>
            <Menu>홈</Menu>
            <Menu>예약하기 (테마) </Menu>
            <Menu>예약하기 (도면)</Menu>
          </>
        )}
      </Content>
      <Extra>
        {isMobile && <MenuOutlined style={{ fontSize: '6vw', color: '#fff' }} onClick={showDrawer} />}
        <Drawer
          title='NEHEM ROAD'
          placement='top'
          height={230}
          closable={false}
          onClose={onClose}
          open={open}
          extra={<Button onClick={onClose}>Close</Button>}
        >
          <p>홈</p>
          <p>예약하기 (테마)</p>
          <p>예약하기 (도면)</p>
        </Drawer>
      </Extra>
    </Wrapper>
  );
};

export default Header;
