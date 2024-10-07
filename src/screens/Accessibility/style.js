import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
  padding: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 30px;
`

export const TitleText = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.text};
  margin-left: 20px;
  font-weight: 700;
`
