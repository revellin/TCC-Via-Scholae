import React from 'react';
import { CustomTitleText, CustomLabelText } from '../../components';
import { Container, HeaderContainer, ApiContainer, TimeText, Chegada } from './styles';

export const Home = () => {

  return (
    <Container>
      <HeaderContainer>
        <CustomTitleText>ROTA</CustomTitleText>
      </HeaderContainer>

      <ApiContainer>
        <Chegada>Chegada</Chegada>
        <TimeText>00:00</TimeText>
      </ApiContainer>
    </Container>
  );
};
