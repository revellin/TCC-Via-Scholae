import React from 'react'
import { BtnCrianças, BtnCriançasText } from './styles'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';

export const ButtonVagas = ({ onPress }) => {
  const theme = useTheme();
  return (
    <BtnCrianças onPress={onPress}>
      <FontAwesome name="users" size={25} color={theme.text} />
      <BtnCriançasText>Vagas</BtnCriançasText>
    </BtnCrianças>
  )
}
