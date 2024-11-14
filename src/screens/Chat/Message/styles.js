import { StyleSheet } from 'react-native'
import styled from 'styled-components';
import { theme } from '../../../styles'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background} ;
`

export const Header = styled.View`
  background: ${props => props.theme.primary};
  padding: ${theme.metrics.px(13)}px;
  flex-direction: row;
  width: ${theme.metrics.px(430)}px;
  height: ${theme.metrics.px(84)}px;
`
export const HeaderInfo = styled.View`

`

export const MessageContainer = styled.View`
  background: ${props => props.theme.secondary};
  border-radius: ${theme.metrics.px(10)}px;
  padding: ${theme.metrics.px(10)}px;
  margin-vertical: ${theme.metrics.px(7)}px;
  align-self: flex-end;
  margin-right: ${theme.metrics.px(20)}px;
  max-width: 65%; 
`

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${theme.metrics.px(10)}px;
  border-top-width: ${theme.metrics.px(1)}px;
  border-color: #E9B224;
`

export const Name = styled.Text`
  font-size: ${theme.metrics.px(25)}px;
  color: ${props => props.theme.text};
  margin-left: ${theme.metrics.px(12)}px;
  margin-top: ${theme.metrics.px(2)}px;
  margin-bottom: ${theme.metrics.px(5)}px;
`

export const SubTitles = styled.Text`
  align-self: flex-start;
  padding-left: ${theme.metrics.px(12)}px;
  color: ${props => props.theme.textsecondary};
`

export const MessageText = styled.Text`
  font-size: ${theme.metrics.px(16)}px;
  color: ${props => props.theme.text};
`

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.gray,
}))`
  flex: 1;
  height: ${theme.metrics.px(40)}px;
  border-color: ${props => props.theme.border};
  border-width: ${theme.metrics.px(1)}px;
  border-radius: ${theme.metrics.px(20)}px;
  color: ${props => props.theme.text};
  padding-horizontal: ${theme.metrics.px(10)}px;
  margin-right: ${theme.metrics.px(10)}px;
`

export const SendButton = styled.TouchableOpacity`
  background: ${props => props.theme.yellow};
  padding-vertical: ${theme.metrics.px(10)}px;
  padding-horizontal: ${theme.metrics.px(15)}px;
  border-radius: ${theme.metrics.px(20)}px;
`

export const SendButtonText = styled.Text`
  color: #FFFFFF;
  font-size: ${theme.metrics.px(15)}px;
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