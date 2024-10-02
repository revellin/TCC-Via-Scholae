import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`
export const HeaderContainer = styled.View`
  width: 430px;
  height: 570px;
  background-color: #272727;
  justify-content: center;
  padding-right: 25px;
`

export const ApiContainer = styled.View`
  padding-left: 25px;
  margin-top: 15px;
`

export const TimeText = styled.Text`
  font-size: 30px;
  color: rgb(172,172,172);
`

export const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
  },
  text: {
    fontSize: 45,
    color: '#272727',
  },
});