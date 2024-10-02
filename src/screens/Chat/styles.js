import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  backgroundColor: #EEEEEE;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ChatContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ChatTextContainer = styled.View`
  margin-left: 10px;
`

export const ChatName = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #262626;
`

export const ChatMessage = styled.Text`
  font-size: 14px;
  color: #ACACAC;
`

export const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 20,
    marginRight: 294,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },

  chatItem: {
    padding: 15,
    backgroundColor: '#DADADA',
    borderRadius: 10,
    marginBottom: 10,
    height: 76,
  },

  pic: {
    width: 45,
    height: 45,
  },
});
