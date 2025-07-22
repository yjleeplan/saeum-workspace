import styled from 'styled-components';

const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 2rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface NehemRoadCheckProps {
  isMobile: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadCheck = ({ isMobile, setIsLoading }: NehemRoadCheckProps) => {
  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Check</Title>
      </TitleWrapper>
      <Content></Content>
    </Wrapper>
  );
};

export default NehemRoadCheck;
