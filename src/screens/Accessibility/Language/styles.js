import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #EEEEEE;
  margin-top: 30px;
`

export const Header = styled.View`
  flex-direction: row;
`

export const LanguageText = styled.Text`
  font-size: 18px;
  color: #262626;
`
export const CheckMark = styled.Text`
  fontSize: 18px;
  color: orange;
`

export const styles = StyleSheet.create({

  back: {
    marginTop: 12,
  },

  title: {
    marginLeft: 20,
  },

  search: {
    width: 340,
    height: 35,
    alignSelf: 'center',
  },

  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

});