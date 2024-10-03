import React from 'react'
import { Input } from './styles'

export const CustomInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <Input placeholder={placeholder}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText} 
    value={value} />
  )
}