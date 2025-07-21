import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { Wrapper, Previous, Title, TitleBlack, Content, Menu, Extra } from './Header.styles';

interface HeaderProps {
  isMobile: boolean;
  headerRef: React.RefObject<HTMLDivElement>;
}

const Header = ({ isMobile, headerRef }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper id='nehem-road-header' ref={headerRef}>
      <Previous>
        <NavLink to='/nehem-road/home' onClick={onClose}>
          <Title width={isMobile ? '22vw' : '7vw'} />
        </NavLink>
      </Previous>
      <Content>
        {isMobile || (
          <>
            <NavLink to='/nehem-road/home'>
              {(props) => <Menu style={{ color: props.isActive ? '#f0a721' : '#fff' }}>홈</Menu>}
            </NavLink>
            <NavLink to='/nehem-road/reserve-theme'>
              {(props) => <Menu style={{ color: props.isActive ? '#f0a721' : '#fff' }}>예약 (테마)</Menu>}
            </NavLink>
            <NavLink to='/nehem-road/reserve-location'>
              {(props) => <Menu style={{ color: props.isActive ? '#f0a721' : '#fff' }}>예약 (위치)</Menu>}
            </NavLink>
          </>
        )}
      </Content>
      <Extra>
        {isMobile && <MenuOutlined style={{ fontSize: '6vw', color: '#fff' }} onClick={showDrawer} />}
        <Drawer
          title={<TitleBlack width='22vw' />}
          placement='top'
          height={230}
          closable={false}
          onClose={onClose}
          open={open}
          extra={<Button onClick={onClose}>Close</Button>}
        >
          <p>
            <NavLink to='/nehem-road/home' onClick={onClose} style={{ color: '#000' }}>
              <div>홈</div>
            </NavLink>
          </p>
          <p>
            <NavLink to='/nehem-road/reserve-theme' onClick={onClose} style={{ color: '#000' }}>
              <div>예약 (테마)</div>
            </NavLink>
          </p>
          <p>
            <NavLink to='/nehem-road/reserve-location' onClick={onClose} style={{ color: '#000' }}>
              <div>예약 (위치)</div>
            </NavLink>
          </p>
        </Drawer>
      </Extra>
    </Wrapper>
  );
};

export default Header;
