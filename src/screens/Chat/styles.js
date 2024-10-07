import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${(props) => props.theme.background};
`

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ChatContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ChatTextContainer = styled.View`
  margin-left: 10px;
`

export const Input = styled.TextInput`
  height: 35px;
  width: 340px;
  border-color: ${(props) => props.theme.yellow};
  border-width: 1px;
  margin-bottom: 20px;
  padding-horizontal: 10px;
  margin-left: 15px;
  border-radius: 10px;
  background: ${(props) => props.theme.background};
  color: ${props => props.theme.text};
`

export const TitleText = styled.Text`
  font-size: 50px;
  text-align: left;
  margin-bottom: 20px;
  margin-top: 30px;
  color: ${(props) => props.theme.text};
`

export const ChatName = styled.Text`
  font-size: 20px;
  margin-top: -5px;
  font-weight: 700;
  color: ${(props) => props.theme.text};
`

export const ChatMessage = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textsecondary};
`

export const ChatItem = styled.TouchableOpacity`
  padding: 15px;
  background: ${props => props.theme.primary};
  border-radius: 10px;
  margin-bottom: 10px;
  height: 76px;
`

export const styles = StyleSheet.create({
  pic: {
    width: 45,
    height: 45,
  },
})
