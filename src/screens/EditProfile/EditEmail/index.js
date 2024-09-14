//importa o react
import React from 'react';
//importa os componentes do react-native
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
//Importa a biblioteca de icon
import AntDesign from '@expo/vector-icons/AntDesign';


// Função principal que define a tela de edição de e-mail
export const EditEmail = () => {
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

                {/* Título da tela */}
                <Text style={styles.title}>Email</Text>

                {/* Botão de confirmação no cabeçalho */}
                <View style={styles.check}>
                    <TouchableOpacity>
                        {/* Ícone para comfirmar */}
                        <AntDesign name="check" size={30} color="#D2A236" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Container para o formulário de edição de e-mail */}
            <View style={styles.miniform}>
                {/* Label */}
                <Text style={styles.label}>
                    Email
                </Text>
                {/* Campo de entrada com o tipo de teclado especifico para email*/}
                <TextInput
                    style={styles.input} placeholder='Edit your Email' keyboardType="email-address" />
            </View>
        </View>
    );
};