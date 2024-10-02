import { StyleSheet } from 'react-native'
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`

export const Header = styled.View`
  margin-top: 30px;
  padding: 15px;
  flex-direction: row;
  width: 411px;
  height: 84px;
`
export const MessageContainer = styled.View`
  background-color: #E6E6E6;
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 7px;
  align-self: flex-end;
  margin-right: 20px;
  max-width: 65%; 
`

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-top-width: 1px;
  border-color: #E9B224;
`

export const Name = styled.Text`
  font-size: 16px;
  color: #262626;
  margin-left: 10px;
  margin-top: 18px;
`

export const MessageText = styled.Text`
  font-size: 16px;
  color: #262626;
`

export const SendButtonText = styled.Text`
  color: #ffffff;
  font-size: 15px;
`


export const styles = StyleSheet.create({
  back: {
    marginTop: 15,
  },

  pic: {
    width: 55,
    height: 55,
    marginLeft: 20,
  },

  input: {
    flex: 1,
    height: 40,
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  sendButton: {
    backgroundColor: '#E9B224',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

});