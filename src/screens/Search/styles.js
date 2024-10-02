import { StyleSheet } from 'react-native'
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 15px;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const InputContainer = styled.View`
  margin-left: 30;
  align-items: center;
`

export const RecentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const RecentItenContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const RecentItenContainer = styled.View`
  margin-left: 10;
`

export const RecentText = styled.Text`
  font-size: 24px;
`

export const CleanText = styled.Text`
  font-size: 16px;
  color: #2997D6;
`

export const RecentItemName = styled.Text`
  font-size: 16px;
`

export const RecentItemInfo = styled.Text`
  fontSize: 14px;
  color: #ACACAC;
`

export const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 30,
    marginRight: 225,
  },

  pic: {
    width: 70,
    height: 70,
  },

  input: {
    width: 250,
    height: 35,
    borderRadius: 7,
  },

  line: {
    marginBottom: 15,
    backgroundColor: '#262626',
  },

  recentItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ACACAC',
  },

  Accountspic: {
    width: 45,
    height: 45,
  },
});
