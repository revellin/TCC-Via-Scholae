import React from "react";
import { Text, StyleSheet } from 'react-native'

export const CustomTitleText = ( {children} ) => {
    return(
        <Text style={styles.title}> 
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
   //Estilização para o título
   title: {
     fontSize: 40, //Tamnho da fonte
     textAlign: 'center', //Centraliza o texto
     marginBottom: 20, //Margem inferior
     fontFamily: 'SourceSansPro_400Regular', //Fonte do texto
     color: '262626', //Cor do texto
   },
 });