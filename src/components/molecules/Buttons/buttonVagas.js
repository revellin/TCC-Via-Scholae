import React from 'react'
import { BtnCrianças, BtnCriançasText } from './styles'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';

export const ButtonVagas = () => {
  const navigation = useNavigation()
  const theme = useTheme();
  return (
    <BtnCrianças onPress={() => navigation.navigate('Vagas')}>
      <FontAwesome name="users" size={25} color={theme.text} />
      <BtnCriançasText>Vagas</BtnCriançasText>
    </BtnCrianças>
  )
}
