import { Image } from 'antd';
import styled from 'styled-components';
import title from 'assets/images/nehem-road/title.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px;
`;

export const Previous = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Menu = styled.div`
  height: 100%;
  // border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #f0a721;
    color: #333;
  }
`;

export const Extra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
`;

export const Title = styled(Image).attrs((props) => ({
  width: props.width,
  src: title,
  preview: false,
}))``;
