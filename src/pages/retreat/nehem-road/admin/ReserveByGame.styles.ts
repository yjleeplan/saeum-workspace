import styled from 'styled-components';

export const Wrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ $ismobile }) => ($ismobile === 'true' ? '100%' : '70%')};
  margin: 0 auto;
  padding: 20px 20px;
  color: #fff;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: #fff;
  border-bottom: 1px solid #f0a721;
`;

export const StepsWrapper = styled.div`
  color: #fff;
  margin-top: 20px;

  & .ant-steps-item-icon {
    width: fit-content;
  }

  & .ant-steps-item-content {
    > .ant-steps-item-title {
      color: #fff !important;
    }
    > .ant-steps-item-description {
      color: #fff !important;
    }
  }
`;
