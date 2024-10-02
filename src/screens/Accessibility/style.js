import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  backgroundColor: #ffffff;
  padding: 16px;
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 25px;
`

export const styles = StyleSheet.create({
  title: {
    top: 8,
    marginLeft: 20,
    fontWeight: '700',
  },
});