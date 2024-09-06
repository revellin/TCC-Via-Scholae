import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CustomTitleText, ButtonPassword, ButtonAccountInfo, ButtonDelete } from '../../components'

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
})
