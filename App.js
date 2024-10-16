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

// Mantém o splash screen visível até que as fontes estejam carregadas
SplashScreen.preventAutoHideAsync()

export default function App() {
  // Obtém o esquema de cores do dispositivo (claro ou escuro)
  const deviceTheme = useColorScheme()
  // Define o tema a ser usado com base no esquema de cores
  const themes = theme[deviceTheme] || theme.dark
  const [appIsReady, setAppIsReady] = useState(false) // Estado para controlar se o app está pronto

  // Carrega as fontes
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

    // Efeito que é acionado quando as fontes estão carregadas
    const prepare = async () => {
      await requestPermissions() // Solicita permissões antes de esconder o splash
      if (fontsLoaded) {
        // Quando as fontes estiverem carregadas, esconde a tela de splash
        await SplashScreen.hideAsync()
        setAppIsReady(true) // Atualiza o estado para indicar que o app está pronto
      }
    }

    prepare()
  }, [fontsLoaded]) // Dependência: executa o efeito quando as fontes são carregadas

  if (!appIsReady) {
    // Exibe uma tela em branco enquanto as fontes estão carregando
    return null
  }

  return (
    // Provedor do banco de dados que permite acessar a instância do banco em toda a aplicação
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
