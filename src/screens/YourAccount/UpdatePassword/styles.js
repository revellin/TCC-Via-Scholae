import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
  flex: 1px;
  padding: 16px;
  background: ${(props) => props.theme.background};
`

export const Header = styled.View`
  flex-direction: row;
  margin-top: 30px;
`

export const Form = styled.View`
  margin-top: 30px;
  align-items: center;
`

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.gray,
}))`
  height: 40px;
  width: 340px;
  border-color: ${(props) => props.theme.yellow};
  border-width: 1px;
  margin-bottom: 20px;
  padding-horizontal: 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.background};
`
export const TitleText = styled.Text`
  font-size: 36px;
  margin-bottom: 16px;
  margin-left: 15px;
  color: ${props => props.theme.text};
`
export const Label = styled.Text`
  color: ${props => props.theme.text};
  font-size: 24px;
  margin-right: 140px;
`

export const styles = StyleSheet.create({
  back: {
    marginTop: 5,
  },
})
