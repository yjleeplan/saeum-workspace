import styled from 'styled-components';

export const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Font = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  font-size: 16px;
  color: #fff;
`;

export const Tel = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: auto;
  font-size: 18px;
  font-weight: bold;
  padding-left: 8px;
`;
