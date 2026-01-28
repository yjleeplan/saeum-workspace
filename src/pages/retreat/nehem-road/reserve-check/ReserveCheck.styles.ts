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

export const SearchWrapper = styled.div<{ $ismobile: string }>`
  display: flex;
  justify-content: ${({ $ismobile }) => ($ismobile === 'true' ? 'center' : '')};
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  & .ant-input-group-wrapper.ant-input-search {
    width: 250px;
    height: 40px;

    .ant-input-wrapper.ant-input-group {
      height: 100%;

      > input {
        height: 100%;
        font-size: 18px;
      }

      button {
        width: 40px;
        height: 100%;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
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

export const GridWrapper = styled.div`
  & .ag-header-viewport {
    font-size: 16px;
    background: #333;

    .ag-header-row.ag-header-row-column {
      color: #fff;
    }
  }

  & .ag-body-horizontal-scroll {
    display: none;
  }
`;
