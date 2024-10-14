import styled from 'styled-components'

//Botao Continue
export const BtnContinue = styled.TouchableOpacity`
  background: ${(props) => props.theme.black};
  padding-vertical: 10px;
  padding-horizontal: 20px;
  width: 210px;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${(props) => props.theme.yellow};
  align-self: center;
`

export const BtnContinueText = styled.Text`
  color: #eeeeee;
  font-size: 16px;
`

//----------------

//Botao Registro
export const BtnRegistro = styled.TouchableOpacity`
  border-color: #262626;
  background: #363636;
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
  color: ${(props) => props.theme.text};
  font-size: 16px;
`

//---------------------

//Botao Cadastro
export const BtnCadastro = styled.TouchableOpacity`
  background: ${(props) => props.theme.primary};
  padding-vertical: 10px;
  align-items: center;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.border};
  width: 232px;
  align-self: center;
`

export const BtnCadastroText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`
//----------------

//Botão Crianças
export const BtnCrianças = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.primary};
  padding: 11px;
  border-radius: 10px;
  min-width: 40%;
  justify-content: center;
`

export const BtnCriançasText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  justify-content: center;
  color: ${(props) => props.theme.text};
`
//---------------

//Btn Edite
export const BtnEdit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.primary};
  padding: 11px;
  border-radius: 10px;
  min-width: 40%;
  justify-content: center;
`

export const BtnEditeText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  justify-content: center;
  color: ${(props) => props.theme.text};
`
//----------------------

//Btn Profile de Configurações
export const BtnProfile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.primary};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  width: 381px;
  height: 133px;
`
export const ProfileImage = styled.View`
  width: 80,
  height: 80,
  borderRadius: 40,
  marginRight: 15,
`
export const ProfileInfo = styled.View`
  flex: 1;
`
export const ProfileName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`
export const ProfilePhone = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.textsecondary};
`
export const ProfileEmail = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.textsecondary};
`
//--------------

//Btn YourAccount
export const BtnYourAccount = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const IconAcContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextAcContainer = styled.View`
  margin-left: 10px;
`
export const OptionTextAc = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`
export const SubTextAc = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.textsecondary};
`
//---------------------

//Btn Criança das Configurações
export const BtnCriançaOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const IconCrContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const OptionTextCr = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  color: ${(props) => props.theme.text};
`
//---------------------

//Btn Acessibilidade
export const BtnAcessibilidadeOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const IconAcesContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextAcesContainer = styled.View`
  margin-left: 10px;
`
export const OptionTextAces = styled.Text`
  font-size: 16px;
  margin-left: 12px;
  color: ${(props) => props.theme.text};
`
//---------------------

//Btn Senha
export const BtnSenha = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const ContentSenha = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextButtonSenha = styled.Text`
  font-size: 18px;
  margin-left: 16px;
  color: ${(props) => props.theme.text};
`
//---------------

//Btn Atualizar
export const BtnAtualizar = styled.TouchableOpacity`
  background: ${(props) => props.theme.yellow};
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
`

export const TextButtonAtual = styled.Text`
  font-size: 20px;
  color: #eeeeee;
`
//---------------

//Btn Tema
export const BtnTema = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const ContentTema = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextButtonTema = styled.Text`
  font-size: 16px;
  margin-left: 16px;
  color: ${(props) => props.theme.text};
`
export const OptionRightTema = styled.Text`
  flex-direction: row;
  align-items: center;
`
export const OptionSubTextTema = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textsecondary};
  margin-right: 8px;
`
//-------------------

//Btn Idioma
export const BtnIdioma = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`
export const ContentIdioma = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextButtonIdoma = styled.Text`
  font-size: 16px;
  margin-left: 16px;
  color: ${(props) => props.theme.text};
`
export const OptionRightIdioma = styled.Text`
  flex-direction: row;
  align-items: center;
`
export const OptionSubTextIdioma = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textsecondary};
  margin-right: 8px;
`
//-----------------

//Radio Button
export const BtnRadioContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-vertical: 5px;
`
export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`
export const RadioButton = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${(props) => props.theme.border};
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background: ${(props) => props.theme.background};
`
export const OptionTextRadio = styled.Text`
  fontsize: 32px;
  color: ${(props) => props.theme.text};
  text-align: left;
`
//---------------------
//Radio Button
export const BtnSettings = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const TextBtnSettings = styled.Text`
  margin-left: 15px;
  font-size: 20px;
  color: ${(props) => props.theme.text};
`
//---------

//Btn Manege Routes
export const BtnManageRoutes = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.primary};
  padding: 11px;
  border-radius: 10px;
  min-width: 40%;
  justify-content: center;
`
export const BtnManegeRoutesText = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  justify-content: center;
  color: ${(props) => props.theme.text};
`
