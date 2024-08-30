import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Logo_ViaScholae from '../../../../assets/Logo_ViaScholae.png'

export const CustomLogo = () => {
    return(
        <Image style={styles.img} source={Logo_ViaScholae}/>
    );
}

const styles = StyleSheet.create({ 
   //Estilização para a imagem (Logo)
   img: {
     width: 350, //Define a largura da imagem
     height: 350, //Define a altura da imagem
   },
 });
