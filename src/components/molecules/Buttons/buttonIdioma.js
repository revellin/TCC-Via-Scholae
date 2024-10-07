import React from 'react'
import {
  BtnIdioma,
  ContentIdioma,
  TextButtonIdoma,
  OptionRightIdioma,
  OptionSubTextIdioma,
} from './styles'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export const ButtonLanguage = () => {
  const navigation = useNavigation()
  return (
    <BtnIdioma onPress={() => navigation.navigate('Language')}>
      <ContentIdioma>
        <MaterialIcons name="language" size={24} color="black" />
        <TextButtonIdoma>Idioma</TextButtonIdoma>
      </ContentIdioma>
      <OptionRightIdioma>
        <OptionSubTextIdioma>Português (BR-PT)</OptionSubTextIdioma>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </OptionRightIdioma>
    </BtnIdioma>
  )
}
