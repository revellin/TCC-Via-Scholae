import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding: 15px;
`

export const Header = styled.View`
  flex-direction: row;
  margin-top: 35px;
`

export const OptionsContainer = styled.View`
  margin-top: 20px;
  padding-horizontal: 20px;
`

export const TitleText = styled.Text`
  font-size: 35px;
  margin-left: 20px;
  margin-top: -6px;
  color: ${(props) => props.theme.text};
`
