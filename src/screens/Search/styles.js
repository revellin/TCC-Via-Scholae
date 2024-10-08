import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding: 15px;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const InputContainer = styled.View`
  margin-left: 30px;
  align-items: center;
`

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.gray,
}))`
  width: 250px;
  height: 35px;
  border-radius: 7px;
  border-width: 1px;
  border-color: ${(props) => props.theme.yellow};
  color: ${props => props.theme.text};
  padding-left: 10px;
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

export const TitleText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 30px;
`

export const RecentText = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.text};
`

export const CleanText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.blue};
`

export const RecentItemName = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`

export const RecentItemInfo = styled.Text`
  fontsize: 14px;
  color: ${(props) => props.theme.textsecondary};
`

export const RecentItem = styled.TouchableOpacity`
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.yellow};
`

export const styles = StyleSheet.create({
  pic: {
    width: 70,
    height: 70,
  },

  line: {
    marginBottom: 15,
  },

  Accountspic: {
    width: 45,
    height: 45,
  },
})
