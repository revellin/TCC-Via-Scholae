import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const CustomRadioButton = ({ value, status, onPress, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      {/* Texto antes do botão */}
      <View style={styles.textContainer}>
        <Text style={styles.optionText}>{value}</Text>
      </View>
      <View style={[styles.radioButton, status === 'checked' && styles.checked]}>
        {status === 'checked' && (
          <Image source={imageSource} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Garante que o texto e botão de rádio fiquem no mesmo eixo
    width: '100%', // Faz com que o layout ocupe toda a largura disponível
    paddingVertical: 5,
  },
  
  textContainer: {
    flex: 1, // Ocupar o máximo de espaço disponível
    justifyContent: 'center',
  },

  radioButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fffff',
  },

  image: {
    width: 25,
    height: 25,
  },
  optionText: {
    fontSize: 32,
    color: '#262626',
    textAlign: 'left',
  },
});