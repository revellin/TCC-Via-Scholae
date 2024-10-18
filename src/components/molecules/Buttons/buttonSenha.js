import React from 'react'
import { BtnSenha, ContentSenha, TextButtonSenha } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export const ButtonPassword = () => {
  const navigation = useNavigation()
  return (
    <BtnSenha onPress={() => navigation.navigate('UpdatePassword')}>
      <ContentSenha>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextButtonSenha>Troque sua senha</TextButtonSenha>
      </ContentSenha>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </BtnSenha>
  )
}
