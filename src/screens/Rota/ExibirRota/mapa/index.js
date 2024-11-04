import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { useRoute, useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useDatabase } from '../../../../database'
import { Container, HeaderContainer, Header } from './styles'
import { Return, ButtonSolicitarVagas } from '../../../../components'

// Define o token de acesso para o Mapbox, permitindo o uso dos serviços de mapa e geocodificação
MapboxGL.setAccessToken(
  'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ'
)

// Componente principal que renderiza a tela do mapa e a funcionalidade de solicitar vaga
export const RotaMap = () => {
  // Pega parâmetros da rota atual (como IDs e CEPs de início e fim) para buscar a rota correta
  const route = useRoute()
  const { routeId, cepStart, cepEnd, nomeEscola, numeroEscola, responsavelId } =
    route.params

  // Define estados para armazenar coordenadas da rota e pontos de início e fim
  const [routeCoordinates, setRouteCoordinates] = useState([])
  const [startCoords, setStartCoords] = useState(null)
  const [endCoords, setEndCoords] = useState(null)

  // Obtém o banco de dados usando o contexto
  const db = useDatabase()
  const navigation = useNavigation()

  // Função para solicitar uma vaga, inserindo um registro no banco de dados
  const solicitarVaga = async () => {
    if (!db) return

    try {
      if (!responsavelId) {
        Alert.alert('Erro', 'Responsável não encontrado.')
        return
      }

      // Insere a solicitação de vaga no banco de dados
      await db.execAsync(
        `INSERT INTO Vagas (status, responsavelId) VALUES ('pendente', ?);`,
        [responsavelId] 
      )

      Alert.alert('Solicitação de Vaga', 'Vaga solicitada com sucesso!')
    } catch (error) {
      console.error('Erro ao solicitar vaga:', error)
      Alert.alert('Erro', 'Não foi possível solicitar a vaga.')
    }
  }

  // Função para buscar as coordenadas a partir do CEP, com opção de incluir nome e número da escola
  const fetchCoordinatesFromCEP = async (
    cep,
    schoolName = null,
    number = null
  ) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

      if (response.data && !response.data.erro) {
        const address = response.data.logradouro
        const city = response.data.localidade

        // Monta o endereço completo com nome e número da escola (se fornecidos)
        const fullAddress = `${address}${number ? `, ${number}` : ''}${schoolName ? `, ${schoolName}` : ''}`

        // Obtém coordenadas a partir do endereço completo e da cidade
        const { latitude, longitude } = await getCoordinatesFromAddress(
          fullAddress,
          city
        )
        return { longitude, latitude }
      } else {
        console.error(`Nenhum dado encontrado para o CEP ${cep}.`)
        return null
      }
    } catch (error) {
      console.error(`Erro ao buscar dados para o CEP ${cep}:`, error)
      return null
    }
  }

  // Função auxiliar para buscar coordenadas com base em endereço e cidade usando o Mapbox
  const getCoordinatesFromAddress = async (address, city) => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}, ${city}.json`,
      {
        params: {
          access_token:
            'sk.eyJ1IjoiY29vaW5nbXRjZG9hIiwiYSI6ImNtMmM4ejl3NDBxbW4ycm9uN3JlamtqbncifQ.hpltrhlR36OOJoDENW2YyQ',
        },
      }
    )
    const coordinates = response.data.features[0].geometry.coordinates
    return { latitude: coordinates[1], longitude: coordinates[0] }
  }

  // Função para buscar a rota do banco de dados e converter os CEPs em coordenadas
  const fetchRoute = async () => {
    if (!db) return

    try {
      // Busca rota específica pelo ID no banco de dados
      const result = await db.getAllAsync('SELECT * FROM Rota WHERE id = ?', [
        routeId,
      ])

      if (result && result.length > 0) {
        const { cep_start, cep_end } = result[0]

        // Busca as coordenadas dos CEPs de início e fim
        const startCoords = await fetchCoordinatesFromCEP(cep_start)
        const endCoords = await fetchCoordinatesFromCEP(
          cep_end,
          nomeEscola,
          numeroEscola
        )

        if (startCoords && endCoords) {
          // Atualiza os estados com as coordenadas obtidas
          setStartCoords([startCoords.longitude, startCoords.latitude])
          setEndCoords([endCoords.longitude, endCoords.latitude])

          // Busca rota entre os pontos usando a API do Mapbox
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

          // Verifica e armazena as coordenadas da rota no estado
          if (response.data.routes.length > 0) {
            const coordinates = response.data.routes[0].geometry.coordinates
            setRouteCoordinates(coordinates)
          } else {
            console.error('Nenhuma rota encontrada.')
          }
        }
      }
    } catch (error) {
      console.error('Erro ao buscar rota:', error)
      Alert.alert('Erro', 'Erro ao buscar rota.')
    }
  }

  // useEffect para buscar a rota ao carregar o componente ou mudar o banco de dados
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
              zoomLevel={18.5}
              minZoomLevel={15.5}
              maxZoomLevel={30}
            />
          )}
          {startCoords && (
            <MapboxGL.PointAnnotation
              coordinate={startCoords}
              id="startpoint"
            />
          )}
          {endCoords && (
            <MapboxGL.PointAnnotation coordinate={endCoords} id="endpoint" />
          )}
          {routeCoordinates.length > 0 && (
            <MapboxGL.ShapeSource
              id="routeSource"
              shape={{
                type: 'Feature',
                geometry: { type: 'LineString', coordinates: routeCoordinates },
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

// Estilos para o componente, incluindo posição do botão de retorno e estilo da linha de rota
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
    lineColor: '#262626',
  },
})
