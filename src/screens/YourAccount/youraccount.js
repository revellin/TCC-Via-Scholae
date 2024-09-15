import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CustomTitleText, ButtonPassword, Return } from '../../components'
import { styles } from './styles';

export const YourAccount = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Cabeçalho da tela */}
      <View style={styles.header}>
        <Return onPress={() => navigation.navigate('Settings')}></Return>
        <CustomTitleText style={styles.title}>Your Account</CustomTitleText>
      </View>

      {/* Botão Change Password */}
      <ButtonPassword></ButtonPassword>

    </View>
  )
};