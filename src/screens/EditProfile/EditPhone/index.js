//Importa o react
import React from 'react';
//importa os componentes da biblioteca react-native
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
//Importando os icones
import AntDesign from '@expo/vector-icons/AntDesign';

// Função principal que define a tela de edição de telefone
export const EditPhone = () => {
    return (
        //Container principal
        <View style={styles.container}>

            {/* Container para o cabeçalho da tela */}
            <View style={styles.header}>

                {/* Botão de retorno */}
                <View style={styles.return}>
                    <TouchableOpacity>
                        {/* Ícone para voltar */}
                        <AntDesign name="left" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Título */}
                <Text style={styles.title}>Número</Text>

                {/* Botão de confirmação */}
                <View style={styles.check}>
                    <TouchableOpacity>
                        {/* Ícone de comfirmação */}
                        <AntDesign name="check" size={30} color="#D2A236" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Container para o formulário de edição de telefone */}
            <View style={styles.miniform}>

                {/* Rótulo para o campo de telefone */}
                <Text style={styles.label}>
                    Phone
                </Text>

                {/* Campo de entrada para o telefone, com teclado tipo numerico */}
                <TextInput
                    style={styles.input} placeholder='+55 11 1234567890' keyboardType="numeric" />
            </View>
        </View>
    );
}