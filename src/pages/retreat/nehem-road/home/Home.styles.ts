import styled from 'styled-components';
import { Image } from 'antd';
import PosterMain from 'assets/images/nehem-road/poster_main.png';
import PosterMainPc from 'assets/images/nehem-road/poster_main_pc.png';

export const Wrapper = styled.div<{ ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ ismobile }) => (ismobile === 'true' ? '100%' : '60%')};
  margin: 0 auto;
`;

export const PosterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Poster = styled(Image).attrs((props) => ({
  width: '100%',
  src: PosterMain,
  preview: false,
}))``;

export const PosterPc = styled(Image).attrs((props) => ({
  width: '100%',
  src: PosterMainPc,
  preview: false,
}))``;

export const DescriptionWrapper = styled.div<{ ismobile: string }>`
  width: 100%;
  padding-left: ${({ ismobile }) => (ismobile === 'true' ? '20px' : '')};
  padding-right: ${({ ismobile }) => (ismobile === 'true' ? '20px' : '')};
  padding-bottom: 50px;
  color: #ccc;
`;

export const DescriptionCategory = styled.p<{ ismobile: string; mt?: number }>`
  width: 100%;
  margin-top: ${({ mt }) => (mt ? mt : 30)}px;
  margin-bottom: 4px;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '20px' : '26px')};
  font-weight: bold;
  color: #f0a721;
`;

export const DescriptionTitle = styled.p<{ ismobile: string; mt?: number }>`
  width: 100%;
  margin-top: ${({ mt }) => (mt ? mt : 30)}px;
  margin-bottom: 4px;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '18px' : '24px')};
  font-weight: bold;
`;

export const Description = styled.p<{ ismobile: string }>`
  width: 100%;
  margin: 0;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '14px' : '18px')};
`;

export const DescriptionTitleLarge = styled.p<{ ismobile: string }>`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 4px;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '20px' : '30px')};
  font-weight: bold;
  color: #fff;
`;

export const DescriptionLarge = styled.p<{ ismobile: string }>`
  width: 100%;
  margin-bottom: 4px;
  font-size: ${({ ismobile }) => (ismobile === 'true' ? '20px' : '30px')};
  font-weight: bold;
  color: #fff;
`;

export const Span = styled.span`
  color: #fff !important;
  font-weight: bold;
`;
