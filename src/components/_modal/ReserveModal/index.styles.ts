import styled from 'styled-components';

export const GameCard = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '100%')};
  margin-bottom: 40px;
  // max-height: calc(var(--vh) - 200px);
  // overflow-y: auto;
  // padding: 0 24px;
`;

export const GameImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GameContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5%;
  width: 100%;
  padding: 10px 0;
`;

export const GameTimeBox = styled.div<{ $enable?: number }>`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  padding: 8px;
  background: ${({ $enable }) => ($enable === 1 ? '#F0A721' : '#808080')};
  border: ${({ $enable }) => ($enable === 1 ? '1px solid #F0A721' : '1px solid #808080')};
  cursor: ${({ $enable }) => ($enable === 1 ? 'pointer' : 'not-allowed')};
  margin-bottom: 0.5%;

  ${(props) =>
    props.$enable === 1 &&
    `&:hover {
    background: #fff !important;
    color: #0d0a09 !important;
    border: 1px solid;
  }`}
`;

export const Row = styled.div<{ $pt?: string; $pb?: string }>`
  display: flex;
  justify-content: space-between;
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
  padding: 0 6px;
`;

export const Span = styled.span`
  color: #ccc;
  font-size: 13px;
  margin-right: 4px;
`;
