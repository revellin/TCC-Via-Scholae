import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles'


export const Container = styled.View`
  flex-grow: 1;
  padding: ${theme.metrics.px(20)}px;
  background: ${props => props.theme.background};
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-horizontal: ${theme.metrics.px(26)}px;
  width: 100%;
  height: ${theme.metrics.px(250)}px;
  position: relative;
`
export const Form = styled.View`
  padding-horizontal: ${theme.metrics.px(10)}px;
`

export const TitleText = styled.Text`
  font-size: ${theme.metrics.px(40)}px;
  text-align: center;
  color: ${props => props.theme.text};
`;

export const Motorista = styled.Text`
  font-size: ${theme.metrics.px(18)}px;
  color: ${props => props.theme.yellow};
  text-decoration: underline;
  text-align: center;
  margin-top: ${theme.metrics.px(10)}px;
`;

export const styles = StyleSheet.create({
  return: {
    position: 'absolute',
    top: 20,
    left: 2,
    zIndex: 1,
  },
  img: {
    width: 300,
    height: 300,
  },
  line: {
    height: 1,
    backgroundColor: '#E1B415',
    marginVertical: 3,
    marginBottom: 25,
  },
});
