import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  CustomTitleText,
  ButtonProfile,
  ButtonYourAccount,
  ButtonChildrenSettings,
  ButtonAccessibility,
  Return,
} from '../../components'
import { styles } from './styles'

export const Settings = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Return style={styles.return} onPress={() => navigation.navigate('Home')}></Return>
        <CustomTitleText style={styles.title}>Configurações</CustomTitleText>
      </View>
      {/* Profile Section */}
      <ButtonProfile></ButtonProfile>

      {/* App Settings Section */}
      <Text style={styles.appSet}>Configurações do App</Text>

      {/* Your Account */}
      <ButtonYourAccount></ButtonYourAccount>

      {/* Children */}
      <ButtonChildrenSettings></ButtonChildrenSettings>

      {/* Accessibility */}
      <ButtonAccessibility></ButtonAccessibility>
    </View>
  )
}
