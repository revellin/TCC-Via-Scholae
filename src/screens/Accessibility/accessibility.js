import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomTitleText, ButtonTheme, ButtonLanguage } from '../../components';
import AntDesign from '@expo/vector-icons/AntDesign';

export const Accessibility = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="left" size={30} color="black" />
        <CustomTitleText style={styles.title}>Accessibility</CustomTitleText>
      </View>

      {/* Botão Dark Mode */}
      <ButtonTheme></ButtonTheme>

      {/* Botão Language */}
      <ButtonLanguage></ButtonLanguage>
    </View>
  );
};

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
  headerText: {
    fontSize: 24,
    fontFamily: 'SourceSansPro_700Bold',
    marginLeft: 16,
  },
});

