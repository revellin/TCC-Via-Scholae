import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { useRoute, useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useDatabase } from '../../../../database'
import { Container, HeaderContainer, Header } from './styles'
import { Return, ButtonSolicitarVagas } from '../../../../components'

MapboxGL.setAccessToken(
  'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ'
)

export const RotaMap = () => {
  const route = useRoute()
  const { routeId, responsavelId } = route.params
  const [routeCoordinates, setRouteCoordinates] = useState([])
  const [startCoords, setStartCoords] = useState(null)
  const [endCoords, setEndCoords] = useState(null)
  const db = useDatabase()
  const navigation = useNavigation()

  // Função para solicitar uma vaga
  const solicitarVaga = async () => {
    if (!db) return

    try {
      // Verifique se o responsavelId é válido
      if (!responsavelId) {
        Alert.alert('Erro', 'Responsável não encontrado.')
        return
      }

      // Inserir solicitação na tabela Vagas
      await db.execAsync(
        `
        INSERT INTO Vagas (status, responsavelId)
        VALUES ('pendente', ?);
      `,
        [responsavelId]
      ) 
      console.error('responsavelid:', responsavelId)

      Alert.alert('Solicitação de Vaga', 'Vaga solicitada com sucesso!')
    } catch (error) {
      console.error('Erro ao solicitar vaga:', error)
      Alert.alert('Erro', 'Não foi possível solicitar a vaga.')
    }
  }

  const fetchCoordinatesFromCEP = async (cep) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cep}.json`,
        {
          params: {
            access_token:
              'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ',
          },
        }
      )
      const coordinates = response.data.features[0].geometry.coordinates
      return { longitude: coordinates[0], latitude: coordinates[1] }
    } catch (error) {
      console.error(`Error fetching coordinates for CEP ${cep}:`, error)
      return null
    }
  }

  const fetchRoute = async () => {
    if (!db) return

    const query = 'SELECT * FROM Rota WHERE id = ?'
    const result = await db.getAllAsync(query, [routeId])

    if (result) {
      const { cep_start, cep_end } = result

      const startCoords = await fetchCoordinatesFromCEP(cep_start)
      const endCoords = await fetchCoordinatesFromCEP(cep_end)

      if (startCoords && endCoords) {
        setStartCoords([startCoords.longitude, startCoords.latitude])
        setEndCoords([endCoords.longitude, endCoords.latitude])

        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords.longitude},${startCoords.latitude};${endCoords.longitude},${endCoords.latitude}`,
          {
            params: {
              geometries: 'geojson',
              access_token:
                'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ',
            },
          }
        )

        const coordinates = response.data.routes[0].geometry.coordinates
        setRouteCoordinates(coordinates)
      }
    }
  }

  useEffect(() => {
    fetchRoute()
  }, [db])

  return (
    <Container>
      <Header>
        <TouchableOpacity style={styles.return}>
          <Return onPress={() => navigation.goBack()} />
        </TouchableOpacity>
      </Header>
      <HeaderContainer>
        <MapboxGL.MapView
          style={{ flex: 1 }}
          styleURL={MapboxGL.StyleURL.Street}
        >
          {startCoords && (
            <MapboxGL.Camera
              centerCoordinate={startCoords}
              zoomLevel={16.5}
              minZoomLevel={15.5}
              maxZoomLevel={17}
            />
          )}

          {startCoords && (
            <MapboxGL.PointAnnotation
              coordinate={startCoords}
              id="startpoint"
            />
          )}
          {endCoords && (
            <MapboxGL.PointAnnotation coordinate={endCoords} id="endpoint">
              <View style={styles.marker} />
            </MapboxGL.PointAnnotation>
          )}

          {routeCoordinates.length > 0 && (
            <MapboxGL.ShapeSource
              id="routeSource"
              shape={{
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: routeCoordinates,
                },
              }}
            >
              <MapboxGL.LineLayer id="routeLine" style={styles.routeLine} />
            </MapboxGL.ShapeSource>
          )}
        </MapboxGL.MapView>
      </HeaderContainer>
      <ButtonSolicitarVagas onPress={solicitarVaga}>
        Solicitar Vaga
      </ButtonSolicitarVagas>
    </Container>
  )
}

const styles = StyleSheet.create({
  return: {
    top: 40,
    left: 5,
  },
  marker: {
    height: 15,
    width: 15,
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  routeLine: {
    lineWidth: 5,
    lineJoin: 'round',
    lineCap: 'round',
    lineColor: '#E1B415',
  },
})
