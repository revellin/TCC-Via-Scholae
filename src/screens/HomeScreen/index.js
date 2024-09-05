import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomTitleText } from '../../components';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.router}>
        <CustomTitleText style={styles.routertitle}>Rota</CustomTitleText>
      </View>
      <View style={styles.timer}>
        <View style={styles.line}>
          <View styles={styles.end}>
            <Text>Chegada</Text>
            <Text>00:00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  router: {
    width: '100%',
    height: 648,
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  routertitle: {
    color: '#ffffff',
    padding: 170,
  },
  timer: {
    flex: 3,
    flexDirection: 'row',
  },
  line: {
    height: 5, //Espressura da linha
    width: 10,
    backgroundColor: "#E9B224", //Cor da linha
  }

})
