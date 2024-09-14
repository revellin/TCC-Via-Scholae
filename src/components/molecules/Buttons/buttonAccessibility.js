import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons';
import { IconAccessibility } from '../../../../assets/icons'


export const ButtonAccessibility = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.settingsOption} onPress={() => navigation.navigate('Accessibility')}>
            <View style={styles.iconTextContainer}>
                <IconAccessibility></IconAccessibility>
                <Text style={styles.optionText}>Accessibility</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //Estilização do botão Password
    settingsOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 12,
    },
    subText: {
        fontSize: 12,
        color: '#666',
    },
})
