import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//Importa a bibloteca de icones
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export const ButtonLanguage = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Language')}>
            <View style={styles.optionContent}>
                <MaterialIcons name="language" size={24} color="black" />
                <Text style={styles.optionText}>Idioma</Text>
            </View>
            <View style={styles.optionRight}>
                <Text style={styles.optionSubText}>Português (BR-PT)</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //Estilização do botão Password
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
})
