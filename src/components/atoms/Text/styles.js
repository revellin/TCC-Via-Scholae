import styled from "styled-components";

export const TitleText = styled.Text`
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.theme.text} ;
`

export const LabelText = styled.Text`
    font-size: ${props => props.fontSize || '20px'}; 
    color: ${props => props.theme.textsecondary};
    margin-bottom: 2px;
`