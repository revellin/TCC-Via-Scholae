import React from "react";
import { StyleSheet } from "react-native";

export const Line = ({ styles }) => {
    return (
        <View style={(styles.line, styles)}></View>
    );
}

const styles = StyleSheet.create({
    line: {
        flex: 1, //Ocupa o espaço disponível na horizontal
        height: 2, //Espressura da linha
        backgroundColor: "#E9B224", //Cor da linha
    },
});
