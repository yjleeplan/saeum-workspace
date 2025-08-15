import { NavLink } from 'react-router-dom';
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

const Font = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  font-size: 16px;
  color: #fff;
`;

const Tel = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: auto;
  font-size: 18px;
  font-weight: bold;
  padding-left: 8px;
`;

interface NehemRoadContactProps {
  isMobile: boolean;
}

const NehemRoadContact = ({ isMobile }: NehemRoadContactProps) => {
  const contactList = ['010-3912-3314', '010-7471-5520'];

  return (
    <Wrapper $ismobile={isMobile.toString()}>
      <TitleWrapper>
        <Title>Contact</Title>
      </TitleWrapper>
      <Content>
        <Font>
          TF1{')'}
          {isMobile ? (
            <NavLink to={`tel:${contactList[0]}`}>
              <Tel>{contactList[0]}</Tel>
            </NavLink>
          ) : (
            <Tel>{contactList[0]}</Tel>
          )}
        </Font>
        <Font>
          TF2{')'}
          {isMobile ? (
            <NavLink to={`tel:${contactList[1]}`}>
              <Tel>{contactList[1]}</Tel>
            </NavLink>
          ) : (
            <Tel>{contactList[1]}</Tel>
          )}
        </Font>
      </Content>
    </Wrapper>
  );
};

export default NehemRoadContact;
