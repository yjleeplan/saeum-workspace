import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #808080;
`;

export const InputWrapper = styled.div`
  width: 200px;
  height: 40px;

  & input {
    height: 100%;
    font-size: 16px;
  }
`;
