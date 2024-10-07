import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  background: ${props => props.theme.background};
  padding: 20px;
`

export const Header = styled.View`
  flex-direction: row;
`

export const TitleText = styled.Text`
  font-size: 40px;
  fon-weight: bold;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 20px;
  color: ${props => props.theme.text};
`

export const TextApp = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.text};
`

export const styles = StyleSheet.create({
  return: {
    marginTop: 25,
  },
});
