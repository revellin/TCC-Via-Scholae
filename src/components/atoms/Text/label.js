import React from "react";
import { Text, StyleSheet } from 'react-native';

export const CustomLabelText = ( {children} ) => {
    return(
        <Text style={styles.label}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    //Estilização dos textos das inputs
    label: {
     fontSize: 20, //Tamnho da fonte
     color: "#262626", //Cor do texto
     fontFamily: 'SourceSansPro_400Regular',
     marginBottom: 2,
   },

 });