import React, { useState, useEffect } from 'react'
import { useColorScheme, Alert } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles'
import { DatabaseProvider, UserProvider } from './src/database'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const deviceTheme = useColorScheme()
  const themes = theme[deviceTheme] || theme.dark
  const [appIsReady, setAppIsReady] = useState(false)
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  })

  useEffect(() => {
    const requestPermissions = async () => {
      // Solicita permissão de localização
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync()
      if (locationStatus !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Este aplicativo precisa de acesso à sua localização para funcionar corretamente.',
          [{ text: 'OK' }]
        )
      }

      // Solicita permissão de galeria
      const { status: mediaStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (mediaStatus !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Este aplicativo precisa de acesso à galeria para funcionar corretamente.',
          [{ text: 'OK' }]
        )
      }
    }

    const prepare = async () => {
      await requestPermissions() 
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
        setAppIsReady(true)
      }
    }

    prepare()
  }, [fontsLoaded])

  if (!appIsReady) {
    return null
  }

  return (
    <DatabaseProvider>
      <UserProvider>
        <ThemeProvider theme={themes}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </UserProvider>
    </DatabaseProvider>
  )
}
