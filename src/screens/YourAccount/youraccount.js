import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CustomTitleText, ButtonPassword, ButtonAccountInfo, ButtonDelete } from '../../components'
import { styles } from './styles';

export const YourAccount = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da tela */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <CustomTitleText style={styles.title}>Your Account</CustomTitleText>
      </View>

      {/* Botão Account Information */}
      <ButtonAccountInfo></ButtonAccountInfo>

      {/* Botão Change Password */}
      <ButtonPassword></ButtonPassword>

      {/* Botão Delete Account */}
      <ButtonDelete></ButtonDelete>
    </View>
  )
};