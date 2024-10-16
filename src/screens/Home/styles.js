import styled from 'styled-components'
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`
export const HeaderContainer = styled.View`
  width: 430px;
  height: 570px;
  background-color: #363636;
  justify-content: center;
  padding-right: 25px;
`

export const ApiContainer = styled.View`
  padding-left: 25px;
  margin-top: 15px;
`

export const Chegada = styled.Text`
  font-size: ${(props) => props.fontSize || '20px'};
  color: ${(props) => props.theme.text};
  margin-bottom: 2px;
  font-size: 50px;
`

export const TimeText = styled.Text`
  font-size: 24px;
  color: rgb(172, 172, 172);
`

export const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});