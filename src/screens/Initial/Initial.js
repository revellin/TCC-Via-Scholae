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
import { useDatabase } from '../../database'; // Certifique-se de que o caminho está correto
import { useUser } from '../../database'; // Importe o contexto do usuário

export const Initial = () => {
  const navigation = useNavigation();
  const db = useDatabase(); // Obtenha a instância do banco de dados
  const { login } = useUser(); // Acesse a função de login do contexto
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleSingIn = async () => {
    if (telefone === '' || senha === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos.');
      return;
    }

    try {
      // Verifica se o usuário existe no banco de dados
      const user = await db.getFirstAsync(
        'SELECT * FROM Responsavel WHERE phone = ? AND password = ?',
        [telefone, senha]
      );

      if (user) {
        // Se o usuário existir, armazene os dados no contexto e navegue para a tela inicial
        const userData = {
          name: user.name,
          email: user.email,
          phone: user.phone,
        };
        login(userData); // Define os dados do usuário logado

        navigation.reset({
          index: 0,
          routes: [{ name: 'Home', params: { user: user.name } }],
        });
      } else {
        Alert.alert('Erro', 'Número de telefone ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao logar: ', error);
      Alert.alert('Erro', 'Erro ao logar. Tente novamente.');
    }
  };

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

        <ButtonRegistro onPress={() => navigation.navigate('Register')}>Registro</ButtonRegistro>
      </FormContainer>
    </Container>
  );
};
