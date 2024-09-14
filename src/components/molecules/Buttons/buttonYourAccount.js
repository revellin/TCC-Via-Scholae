import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
//Importa a bibloteca de icones
import { Ionicons } from '@expo/vector-icons';
import { IconUser } from '../../../../assets/icons'

export const ButtonYourAccount = () => {
    return (
        <TouchableOpacity style={styles.settingsOption}>
            <View style={styles.iconTextContainer}>
                <IconUser></IconUser>
                <View style={styles.textContainer}>
                    <Text style={styles.optionText}>Your Account</Text>
                    <Text style={styles.subText}>Manage your information</Text>
                </View>
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
    },
    subText: {
        fontSize: 12,
        color: '#666',
    },
})
