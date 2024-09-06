import React from "react";
import { View, StyleSheet } from "react-native";

export const Line = ({ style }) => {
    return (
        <View style={[styles.line, style]}></View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 2, //Espressura da linha
        backgroundColor: "#E9B224", //Cor da linha
    },
});
