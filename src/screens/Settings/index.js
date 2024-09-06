import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomTitleText, ButtonProfile } from '../../components';
import { Ionicons } from '@expo/vector-icons';

export const Settings = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomTitleText>Settings</CustomTitleText>

      {/* Profile Section */}
      <ButtonProfile></ButtonProfile>

      {/* App Settings Section */}
      <Text style={styles.sectionTitle}>App Settings</Text>

      {/* Your Account */}
      <TouchableOpacity style={styles.settingsOption}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="person-outline" size={24} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Your Account</Text>
            <Text style={styles.subText}>Manage your information</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </TouchableOpacity>

      {/* Children */}
      <TouchableOpacity style={styles.settingsOption}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.optionText}>Children</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </TouchableOpacity>

      {/* Accessibility */}
      <TouchableOpacity style={styles.settingsOption}>
        <View style={styles.iconTextContainer}>
          <Ionicons name="accessibility-outline" size={24} color="black" />
          <Text style={styles.optionText}>Accessibility</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  optionText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: '#666',
  },
});
