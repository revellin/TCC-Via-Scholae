import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CustomTitleText, Return, CustomInput, Line } from '../../../components'
//import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'

export const Language = () => {
  const navigation = useNavigation()
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [searchText, setSearchText] = useState('')

  const languages = [
    { id: '1', name: 'Portuguese' },
    { id: '2', name: 'English' },
  ]

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Return style={styles.back} onPress={() => navigation.navigate('Accessibility')}/>
        <CustomTitleText style={styles.title}>Idioma</CustomTitleText>
      </View>
      {/*<Ionicons name="search" size={24} color="gray" style={styles.icon} />*/}
      <CustomInput
        style={styles.search}
        placeholder="Procurar Idioma"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      
      <Line/>

      <FlatList
        data={filteredLanguages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.languageOption}
            onPress={() => setSelectedLanguage(item.name)}
          >
            <Text style={styles.languageText}>{item.name}</Text>
            {selectedLanguage === item.name && (
              <Text style={styles.checkMark}>✓</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
