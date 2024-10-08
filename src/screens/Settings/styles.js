import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  background: ${props => props.theme.background};
  padding: 20px;
  justify-content: flex-start;
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
export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${props => props.theme.yellow};
  align-items: center;
  align-self: center;
  width: 275px;
  height: 30px;
`;

export const LogoutButtonText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 18px;
  top: 2px;
`;

export const styles = StyleSheet.create({
  return: {
    marginTop: 25,
  },
});
