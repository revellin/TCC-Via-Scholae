import React, { useState } from 'react'
import { View, TouchableOpacity, Alert, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  CustomTitleText,
  Return,
  CustomInput,
  CustomLabelText,
} from '../../../components'
import { styles } from './styles'

export const UpdatePassword = () => {
  const navigation = useNavigation()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleUpdatePassword = () => {
    // Aqui você pode implementar a lógica de atualização de senha, como verificar as senhas e enviar uma solicitação para o servidor.
    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As novas senhas não coincidem')
      return
    }
    // Simulação de atualização de senha bem-sucedida
    Alert.alert('Sucesso', 'Senha atualizada com sucesso!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Return style={styles.back} onPress={() =>navigation.navigate('YourAccount')}/>
        <CustomTitleText style={styles.title}>
          Atualize sua Senha
        </CustomTitleText>
      </View>

      <View style={styles.form}>
        <CustomLabelText style={styles.label}>Digite sua senha atual</CustomLabelText>
        <CustomInput
          style={styles.input}
          placeholder="Insira sua senha atual"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <CustomLabelText style={styles.label}>Digite uma nova senha</CustomLabelText>
        <CustomInput
          style={styles.input}
          placeholder="Digite uma nova senha"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <CustomLabelText style={styles.label}>Confirme sua senha</CustomLabelText>
        <CustomInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.atualizar}
          color="#FFB100"
          onPress={handleUpdatePassword}
        >
          <Text style={styles.textButton}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
