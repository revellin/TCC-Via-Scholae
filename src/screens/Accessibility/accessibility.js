import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomTitleText } from '../../components';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const Accessibility = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="left" size={30} color="black" />
        <CustomTitleText style={styles.title}>Accessibility</CustomTitleText>
      </View>

      {/* Botão Dark Mode */}
      <TouchableOpacity style={styles.optionButton}>
        <View style={styles.optionContent}>
          <MaterialIcons name="brightness-6" size={24} color="black" />
          <Text style={styles.optionText}>Dark Mode</Text>
        </View>
        <View style={styles.optionRight}>
          <Text style={styles.optionSubText}>Off</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>

      {/* Botão Language */}
      <TouchableOpacity style={styles.optionButton}>
        <View style={styles.optionContent}>
          <MaterialIcons name="language" size={24} color="black" />
          <Text style={styles.optionText}>Language</Text>
        </View>
        <View style={styles.optionRight}>
          <Text style={styles.optionSubText}>English (US)</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
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
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 16,
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionSubText: {
    fontSize: 14,
    color: 'gray',
    marginRight: 8,
  },
});

