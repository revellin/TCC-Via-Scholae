import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomTitleText, ButtonProfile, ButtonYourAccount, ButtonChildrenSettings, ButtonAccessibility } from '../../components';


export const Settings = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomTitleText style={styles.title}>Settings</CustomTitleText>

      {/* Profile Section */}
      <ButtonProfile></ButtonProfile>

      {/* App Settings Section */}
      <Text style={styles.appSet}>App Settings</Text>

      {/* Your Account */}
      <ButtonYourAccount></ButtonYourAccount>

      {/* Children */}
      <ButtonChildrenSettings></ButtonChildrenSettings>

      {/* Accessibility */}
      <ButtonAccessibility></ButtonAccessibility>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
  },
  appSet: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
