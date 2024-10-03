import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background}
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
  font-size: 60px;

`

export const TimeText = styled.Text`
  font-size: 24px;
  color: rgb(172,172,172);
`