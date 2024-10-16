import React, { useEffect, useState } from 'react'
import {
  Container,
  HeaderContainer,
  ApiContainer,
  TimeText,
  Chegada,
} from './styles'
import * as Location from 'expo-location'
import MapboxGL from '@rnmapbox/maps'
import { Text } from 'react-native'

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ'
)

export const Home = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.getForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada.')
        return
      }

      let loc = await Location.getCurrentPositionAsync({})
      setLocation(loc.coords)
    }

    getLocation()
  }, [])

  if (errorMsg) {
    return <Text>{errorMsg}</Text>
  }

  if (!location) {
    return <Text>Obtendo localização...</Text>
  }

  const handleRegionChange = async () => {
    console.log('A região do mapa foi alterada')
  }

  return (
    <Container>
      <HeaderContainer>
        <MapboxGL.MapView
          style={{ flex: 1 }}
          styleURL={MapboxGL.StyleURL.Street}
          onRegionDidChange={handleRegionChange}
        >
          <MapboxGL.Camera
            centerCoordinate={[location.longitude, location.latitude]}
            zoomLevel={16.5}
            minZoomLevel={15.5}
            maxZoomLevel={17}
          />
        </MapboxGL.MapView>
      </HeaderContainer>

      <ApiContainer>
        <Chegada>Chegada</Chegada>
        <TimeText>00:00</TimeText>
      </ApiContainer>
    </Container>
  )
}
