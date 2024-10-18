import styled from 'styled-components/native';
import { theme } from '../../../styles'

export const Input = styled.TextInput`
  height: ${theme.metrics.px(40)}px;
  border-color: #000000;
  border-width: ${theme.metrics.px(1)}px;
  margin-bottom: ${theme.metrics.px(20)}px;
  padding-horizontal: ${theme.metrics.px(10)}px;
  border-radius: ${theme.metrics.px(10)}px;
  background-color: #EEEEEE;
`;
