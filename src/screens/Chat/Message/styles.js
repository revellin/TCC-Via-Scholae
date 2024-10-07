import { StyleSheet } from 'react-native'
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background} ;
`

export const Header = styled.View`
  margin-top: 30px;
  padding: 15px;
  flex-direction: row;
  width: 411px;
  height: 84px;
`
export const MessageContainer = styled.View`
  background: ${props => props.theme.secondary};
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 7px;
  align-self: flex-end;
  margin-right: 20px;
  max-width: 65%; 
`

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-top-width: 1px;
  border-color: #E9B224;
`

export const Name = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.text};
  margin-left: 12px;
  margin-top: 2px;
`

export const MessageText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.text};
`

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border-color: ${props => props.theme.border};
  border-width: 1px;
  border-radius: 20px;
  padding-horizontal: 10px;
  margin-right: 10px;
`

export const SendButton = styled.TouchableOpacity`
  background: ${props => props.theme.yellow};
  padding-vertical: 10px;
  padding-horizontal: 15px;
  border-radius: 20px;
`

export const SendButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
`


export const styles = StyleSheet.create({
  back: {
    marginTop: 15,
  },

  pic: {
    width: 55,
    height: 55,
    marginLeft: 20,
  },
});