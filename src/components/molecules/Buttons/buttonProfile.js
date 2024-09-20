import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import { ProfilePic } from '../..'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export const ButtonProfile = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.profileSection}
      onPress={() => navigation.navigate('EditProfile')}
    >
      <ProfilePic style={styles.profileImagePlaceholder} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Matheus Romano</Text>
        <Text style={styles.profilePhone}>+55 11 12345-6789</Text>
        <Text style={styles.profileEmail}>matheusemailfake@gmail.com</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //Estilização do botão Continue
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#DADADA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: 381,
    height: 133,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#c4c4c4',
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePhone: {
    fontSize: 15,
    color: '#ACACAC',
  },
  profileEmail: {
    fontSize: 15,
    color: '#ACACAC',
  },
})
