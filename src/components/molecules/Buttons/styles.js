import styled from "styled-components";

//Botao Continue
export const BtnContinue = styled.TouchableOpacity`
  background-color: #000000;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  width: 210px;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #E9B224;
  align-self: center;
`;

export const BtnContinueText = styled.Text`
  color: #EEEEEE;
  font-size: 16px;
`;

//----------------

//Botao Registro
export const BtnRegistro = styled.TouchableOpacity`
    border-color: #262626;
    background-color: #363636; 
    border-radius: 20px;
    border-width: 2px;
    border-color: #565656;
    padding-vertical: 10px;
    padding-horizontal: 20px;
    width: 210px;
    align-items: center;
    align-self: center;
`

export const BtnRegistroText = styled.Text`
    color: ${props => props.theme.color};
    font-size: 16px;
`

//---------------------

//Botao Cadastro
export const BtnCadastro = styled.TouchableOpacity`
  background-color: #363636;
  padding-vertical: 10px;
  align-items: center;
  border-radius: 15px;
  border-width: 2px;
  border-color: #565656;
  width: 232px;
  align-self: center;
`

export const BtnCadastroText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.color};
`