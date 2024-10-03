import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`
export const ContainerLogo = styled.View`
  background-color: #D2A236;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 420px;
`

export const FormContainer = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 30px;
`

export const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
`

export const OrText = styled.Text`
  margin-horizontal: 10px;
  font-size: 15px;
  color: #E9B224;
`

export const styles = StyleSheet.create({
  line: {
    flex: 1,
  },
});
