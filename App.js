import React, { useState, useEffect } from 'react'
import { useColorScheme } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro'
import { NavigationContainer } from '@react-navigation/native' // Importar o NavigationContainer
import { Routes } from './src/routes'
import { init } from './src/database'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles'

// Mantenha o splash screen visível até que as fontes estejam carregadas
SplashScreen.preventAutoHideAsync()

export default function App() {

  const  deviceTheme = useColorScheme();

  const themes =  theme[deviceTheme] || theme.dark

  const [appIsReady, setAppIsReady] = useState(false)            

  // Carregue as fontes
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  })

  useEffect(() => {
    const setupDatabase = async () => {
      await init()
      console.log('Banco de Dadis criado e inicializado')
    }
    setupDatabase()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      // Quando as fontes estiverem carregadas, esconda o splash screen
      SplashScreen.hideAsync()
      setAppIsReady(true) // Atualize o estado para indicar que o app está pronto
    }
  }, [fontsLoaded])

  if (!appIsReady) {
    // Exibe uma tela em branco enquanto as fontes estão carregando
    return null
  }

  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
