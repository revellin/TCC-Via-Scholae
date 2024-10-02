import { StyleSheet } from 'react-native'
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  padding: 16px;
  background-color: #fffff;
  margin-top: 40px
`

export const Header = styled.View`
  flex-direction: row;
`

export const Form = styled.View`
  margin-top: 30px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #EEEEEE;
  font-size: 20px;
`

export const styles = StyleSheet.create({
  back: {
    marginTop: 10,
  },

  title: {
    fontSize: 36,
    marginBottom: 16,
    marginLeft: 15,
  },
    back: {
      marginTop: 4,
    },
    title: {
      fontSize: 36,
      marginBottom: 16,
      marginLeft: 15,
    },

  input: {
    height: 40,
    width: 340,
  },

    label: {
      marginRight: 180,
    },
});