import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-grow: 1;
  padding: 20px;
  background: ${(props) => props.theme.background};
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-horizontal: 26px;
  width: 100%;
  height: 250px;
  position: relative;
`
export const Form = styled.View`
  padding-horizontal: 10px;
`
export const ImgContainer = styled.View`
  background: ${props => props.theme.primary};
  border-radius: 8px;
  padding: 10px;
  margin-vertical: 10px; 
  align-items: center;
  justify-content: center;
  shadow-color: #000000;
  shadow-offset: 0.6px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

export const TitleText = styled.Text`
  font-size: 40px;
  text-align: center;
  color: ${(props) => props.theme.text};
`
export const ImagePreview = styled.Image`
  width: 250px;
  height: 150px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const styles = StyleSheet.create({
  return: {
    position: 'absolute',
    top: 20,
    left: 2,
    zIndex: 1,
  },
  img: {
    width: 300,
    height: 300,
  },
  line: {
    height: 1,
    backgroundColor: '#E1B415',
    marginVertical: 3,
    marginBottom: 25,
  },
})
