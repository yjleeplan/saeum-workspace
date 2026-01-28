import styled from 'styled-components';

export const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '80%')};
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

export const Row = styled.div<{ $pt?: string; $pb?: string; $mb?: string; $justify?: string }>`
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? $justify : '')};
  width: 100%;
  padding-top: ${({ $pt }) => ($pt ? $pt : '0px')};
  padding-bottom: ${({ $pb }) => ($pb ? $pb : '0px')};
  margin-bottom: ${({ $mb }) => ($mb ? $mb : '0px')};
`;

export const Col = styled.div<{
  width: string;
  $align?: string;
  $font?: string;
  $fw?: string;
  $color?: string;
  $flow?: string;
  $padding?: string;
  $mb?: string;
}>`
  display: flex;
  justify-content: ${({ $align }) => ($align ? $align : 'center')};
  align-items: center;
  flex-flow: ${({ $flow }) => ($flow ? $flow : 'unset')};
  width: ${({ width }) => width};
  font-size: ${({ $font }) => ($font ? $font : '16px')};
  font-weight: ${({ $fw }) => ($fw ? $fw : '')};
  color: ${({ $color }) => ($color ? $color : '#000')};
  padding: ${({ $padding }) => ($padding ? $padding : '0 2px')};
  margin-bottom: ${({ $mb }) => ($mb ? $mb : '4px')};
`;

export const GameTimeBox = styled.div<{ $enable?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2px;
  background: ${({ $enable }) => ($enable === 1 ? '#F0A721' : '#808080')};
  border: ${({ $enable }) => ($enable === 1 ? '1px solid #F0A721' : '1px solid #808080')};
  cursor: pointer;
  margin-bottom: 0.5%;

  ${(props) =>
    props.$enable === 1 &&
    `&:hover {
    background: #fff !important;
    color: #0d0a09 !important;
    border: 1px solid;
  }`}
`;
