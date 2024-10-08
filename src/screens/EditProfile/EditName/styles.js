import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${(props) => props.theme.background};
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;
`
export const Check = styled.View`
  margin-top: 7px;
`
export const Form = styled.View`
  margin-top: 7px;
`
export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`
export const Label = styled.Text`
  font-size: 20px;
  margin-left: 20px;
  color: ${(props) => props.theme.text};
  margin-bottom: 5px;
`
export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.gray,
}))`
  height: 40px;
  width: 350px;
  border-color: ${(props) => props.theme.yellow};
  border-width: 1px;
  margin-bottom: 10px;
  padding-horizontal: 8px;
  border-radius: 10px;
  margin-left: 20px;
  color: ${(props) => props.theme.text};
`
