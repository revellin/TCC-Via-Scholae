import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  BtnYourAccount,
  IconAcContainer,
  TextAcContainer,
  OptionTextAc,
  SubTextAc,
} from './styles'
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons'
import { IconUser } from '../../../../assets/icons'

export const ButtonYourAccount = () => {
  const navigation = useNavigation()
  return (
    <BtnYourAccount onPress={() => navigation.navigate('YourAccount')}>
      <IconAcContainer>
        <IconUser />
        <TextAcContainer>
          <OptionTextAc>Conta</OptionTextAc>
          <SubTextAc>Gerencie suas informações</SubTextAc>
        </TextAcContainer>
      </IconAcContainer>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </BtnYourAccount>
  )
}
