import { NavLink } from 'react-router-dom';
import { Wrapper, TitleWrapper, Title, Content, Font, Tel } from './Contact.styles';

interface NehemRoadContactProps {
  isMobile?: boolean;
}

const NehemRoadContact = ({ isMobile = false }: NehemRoadContactProps) => {
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
