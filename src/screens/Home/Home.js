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
import axios from 'axios'

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ'
)

export const Home = () => {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [route, setRoute] = useState(null)
  const [eta, setEta] = useState('00:00')
  const destination = {
    latitude: -23.55052,
    longitude: -46.6333,
  }

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.getForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada.')
        return
      }

      let loc = await Location.getCurrentPositionAsync({})
      setLocation(loc.coords)

      // Após obter a localização, calcular a rota e ETA
      if (loc.coords) {
        getRoute(loc.coords, destination)
      }
    }

    getLocation()
  }, [])

  const getRoute = async (origin, destination) => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?geometries=geojson&access_token=sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ`

    try {
      const response = await axios.get(url)
      const data = response.data

      if (data.routes && data.routes.length > 0) {
        const routeData = data.routes[0]
        setRoute(routeData.geometry.coordinates) // Armazenar a rota
        setEta(convertSecondsToTime(routeData.duration)) // ETA (em segundos)
      }
    } catch (error) {
      console.error('Erro ao buscar rota: ', error)
    }
  }

  const convertSecondsToTime = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor(durationInSeconds % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  if (errorMsg) {
    return <Text>{errorMsg}</Text>
  }

  if (!location) {
    return <Text>Obtendo localização...</Text>
  }

  const handleRegionChange = async () => {
    
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

          {route && (
            <MapboxGL.ShapeSource
              id="routeSource"
              shape={{
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: route,
                },
              }}
            >
              <MapboxGL.LineLayer
                id="routeLayer"
                style={{
                  lineWidth: 5,
                  lineJoin: 'round',
                  lineCap: 'round',
                  lineColor: '#1DB954',
                }}
              />
            </MapboxGL.ShapeSource>
          )}
        </MapboxGL.MapView>
      </HeaderContainer>

      <ApiContainer>
        <Chegada>Chegada</Chegada>
        <TimeText>{eta}</TimeText>
      </ApiContainer>
    </Container>
  )
}
