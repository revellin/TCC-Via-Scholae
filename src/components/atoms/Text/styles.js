import styled from "styled-components";

export const TitleText = styled.Text`
    font-size: ${props => props.fontSize || '40px'};
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.theme.color} ;
`

export const LabelText = styled.Text`
    font-size: ${props => props.fontSize || '20px'}; 
    color: ${props => props.theme.color};
    margin-bottom: 2px;
`