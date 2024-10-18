import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles'

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`
export const ContainerLogo = styled.View`
  background: ${props =>props.theme.yellow};
  justify-content: center;
  align-items: center;
  width: ${theme.metrics.px(430)}px;
  height: ${theme.metrics.px(420)}px;
`

export const FormContainer = styled.View`
  padding-horizontal: ${theme.metrics.px(24)}px;
  padding-vertical: ${theme.metrics.px(30)}px;
`

export const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${theme.metrics.px(15)}px;
`

export const OrText = styled.Text`
  margin-horizontal: ${theme.metrics.px(10)}px;
  font-size: ${theme.metrics.px(15)}px;
  color: ${props => props.theme.yellow};
`

export const styles = StyleSheet.create({
  line: {
    flex: 1,
  },
});
