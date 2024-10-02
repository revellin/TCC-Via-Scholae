import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  background-color: #ffffff;
  padding: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 30px;
`

export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 16,
    top: 10,
  },
})