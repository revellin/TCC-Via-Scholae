import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BtnProfile, ProfileInfo, ProfileName, ProfilePhone, ProfileEmail } from './styles'
import { ProfilePic } from '../../../components'
import { Ionicons } from '@expo/vector-icons'

export const ButtonProfile = () => {
  const navigation = useNavigation()
  return (
    <BtnProfile onPress={() => navigation.navigate('EditProfile')}>
      <ProfilePic style={styles.profileImagePlaceholder} />
      <ProfileInfo>
        <ProfileName>Matheus Romano</ProfileName>
        <ProfilePhone>+55 11 12345-6789</ProfilePhone>
        <ProfileEmail>matheusemailfake@gmail.com</ProfileEmail>
      </ProfileInfo>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </BtnProfile>
  )
};

const styles = StyleSheet.create({
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#c4c4c4',
    borderRadius: 40,
    marginRight: 15,
  },
})