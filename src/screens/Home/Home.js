import React from 'react';
import { CustomTitleText, CustomLabelText } from '../../components';
import { styles, Container, HeaderContainer, ApiContainer, TimeText } from './styles';

export const Home = () => {

  return (
    <Container>
      <HeaderContainer>
        <CustomTitleText style={styles.title}>ROTA</CustomTitleText>
      </HeaderContainer>

      <ApiContainer>
        <CustomLabelText style={styles.text}>Chegada</CustomLabelText>
        <TimeText>00:00</TimeText>
      </ApiContainer>
    </Container>
  );
};
