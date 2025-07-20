import { Select, Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 30px 20px;
  color: #fff;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SelectBox = styled(Select)<{
  onChange: string | ((e: React.ChangeEvent<HTMLInputElement>) => void) | null;
}>`
  display: flex;
  width: 240px;
  height: 40px;
  margin-left: 10px;
  font-size: 18px;
`;

export const GameCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 5%;
  width: 100%;
  padding: 20px 0;
`;

export const GameCard = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '30%')};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`;

export const Row = styled.div<{ $pt?: string; $pb?: string; $justify?: string }>`
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? $justify : '')};
  width: 100%;
  padding-top: ${({ $pt }) => ($pt ? $pt : '0px')};
  padding-bottom: ${({ $pb }) => ($pb ? $pb : '0px')};
`;

export const Col = styled.div<{
  width: string;
  $align?: string;
  $font?: string;
  $fw?: string;
}>`
  display: flex;
  justify-content: ${({ $align }) => ($align ? $align : 'start')};
  align-items: center;
  width: ${({ width }) => width};
  height: 100%;
  font-size: ${({ $font }) => ($font ? $font : '15px')};
  font-weight: ${({ $fw }) => ($fw ? $fw : '')};
  padding: 0 8px;
`;

export const Span = styled.span`
  color: #ccc;
  margin-right: 4px;
`;

export const ButtonStyled = styled(Button)`
  width: 60%;
  height: 40px;
  background: #333;
  font-size: 18px;
  color: #fff;
  border: 1px solid #fff;
`;
