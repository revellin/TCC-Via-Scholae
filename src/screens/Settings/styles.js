import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  backgroundColor: #EEEEEE;
  padding: 20px;
  marginTop: 20px;
`

export const Header = styled.View`
  flex-direction: row;
`

export const TextApp = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const styles = StyleSheet.create({
  return: {
    marginTop: 25,

  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
    marginLeft: 20,
  },
});
