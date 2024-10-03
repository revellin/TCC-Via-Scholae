import React from 'react';
import { CustomTitleText, CustomLabelText } from '../../components';
import { Container, HeaderContainer, ApiContainer, TimeText } from './styles';

export const Home = () => {

  return (
    <Container>
      <HeaderContainer>
        <CustomTitleText>ROTA</CustomTitleText>
      </HeaderContainer>

      <ApiContainer>
        <CustomLabelText style={{ fontSize: 80 }}>Chegada</CustomLabelText>
        <TimeText>00:00</TimeText>
      </ApiContainer>
    </Container>
  );
};
