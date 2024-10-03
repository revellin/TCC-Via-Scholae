import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CustomTitleText,
  CustomLogo,
  CustomLabelText,
  CustomInput,
  ButtonContinue,
  ButtonRegistro,
  Line,
} from '../../components';
import { styles, Container, ContainerLogo, FormContainer, LineContainer, OrText } from './styles';

export const Initial = () => {
  const navigation = useNavigation();
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  function handleSingIn() {
    if (telefone === '' || senha === '') {
      Alert.alert('', 'Preencha todos os campos');
      return;
    }

    const data = {
      telefone,
      senha,
    };
    console.log(data);

    // Redefine a pilha de navegação
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  return (
    <Container>
      <ContainerLogo>
        <CustomLogo />
      </ContainerLogo>

      <FormContainer>
        <CustomTitleText>Comece sua jornada</CustomTitleText>
        <CustomLabelText>Digite seu telefone</CustomLabelText>
        <CustomInput
          onChangeText={setTelefone}
          value={telefone}
          placeholder="Insira seu Telefone"
          keyboardType="numeric"
        />
        <CustomLabelText>Digite sua senha</CustomLabelText>
        <CustomInput
          onChangeText={setSenha}
          value={senha}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <ButtonContinue onPress={handleSingIn}>Continue</ButtonContinue>

        <LineContainer>
          <Line style={styles.line}></Line>
          <OrText>or</OrText>
          <Line style={styles.line}></Line>
        </LineContainer>

        <ButtonRegistro>Registro</ButtonRegistro>
      </FormContainer>
    </Container>
  );
};
