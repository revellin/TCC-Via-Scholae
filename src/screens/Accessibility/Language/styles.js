import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: ${props => props.theme.background} ;
`

export const Header = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const TitleText = styled.Text`
  font-size: 35px;
  margin-left: 20px;
  margin-top: -5px;
  color: ${props => props.theme.text};
`
export const LanguageText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.text} ;
`
export const CheckMark = styled.Text`
  fontSize: 18px;
  color: ${props => props.theme.yellow};
`
export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.gray,
}))`
  width: 340px;
  height: 35px;
  align-self: center;
  background: ${props => props.theme.background};
  border-width: 1px;
  border-color: ${props => props.theme.yellow};
  border-radius: 10px;
  color: ${props => props.theme.text};
  margin-bottom: 25px;
  padding-left: 10px;
`
export const LanguageOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.yellow};
`

export const styles = StyleSheet.create({
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

});