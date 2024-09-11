import React from 'react';
import { View, Text } from 'react-native';
import { CustomTitleText, ButtonProfile, ButtonYourAccount, ButtonChildrenSettings, ButtonAccessibility } from '../../components';
import { styles } from './styles';


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