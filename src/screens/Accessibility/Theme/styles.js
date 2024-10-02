import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 15px;
`

export const Header = styled.View`
  flex-direction: row;
  margin-top: 30px;
`

export const OptionsContainer = styled.View`
  margin-top: 20px;
  padding-horizontal: 20px;
`

export const styles = StyleSheet.create({

  back: {
    marginTop: 12,
  },

  title: {
    marginLeft: 20,
  },
});
