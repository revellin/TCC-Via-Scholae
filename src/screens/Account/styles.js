import styled from 'styled-components';

export const Container = styled.View`
  flex: 1px;
  padding: 25px;
  background: ${props => props.theme.background};
`

export const ProfileContainer = styled.View`
  position: relative;
  align-items: center;
  align-self: center;
  background: ${props => props.theme.primary};
  padding: 20px;
  border-radius: 10px;
  margin-vertical: 20px;
  width: 358px;
  height: 185px;
  elevation: 4;
  marginTop: 90px;
`

export const ConProfilePic = styled.View`
  position: absolute;
  z-index: 1;
  marginTop: -60px;
`
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 15px;
`

export const ProfileName = styled.Text`
  font-size: 30px;
  margin-top: 25px;
  margin-bottom: 3px;
  color: ${props => props.theme.text};
`
export const SubTitles = styled.Text`
  align-self: flex-start;
  padding-left: 50px;
  color: ${props => props.theme.textsecondary};
`