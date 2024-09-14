import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { CustomLogo, CustomTitleText, CustomLabelText, ButtonNext, CustomInput, Line } from '../../components';
import { styles } from './styles';
// Importando o ícone de retorno
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

export const Register = () => {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('Splash')}>
          <AntDesign name="left" size={40} color="black" />
        </TouchableOpacity>
        <CustomLogo style={styles.img} />
      </View>

      <View style={styles.form}>
        <CustomTitleText style={styles.title}>Register</CustomTitleText>
        <Line style={styles.line}></Line>

        <CustomLabelText>Enter your full name</CustomLabelText>
        <CustomInput placeholder="Enter your full Name" />

        <CustomLabelText>Insert your phone</CustomLabelText>
        <CustomInput
          placeholder="Insert your phone"
          keyboardType="phone-pad"
        />

        <CustomLabelText>Enter your Email</CustomLabelText>
        <CustomInput
          placeholder="Enter your Email"
          keyboardType="email-address"
        />

        <CustomLabelText>Enter a password</CustomLabelText>
        <CustomInput
          placeholder="Enter a password"
          secureTextEntry
        />
        <CustomLabelText>Confirm your password</CustomLabelText>
        <CustomInput
          placeholder="Confirm your password"
          secureTextEntry
        />
        <ButtonNext></ButtonNext>
      </View>
    </ScrollView>
  );
}