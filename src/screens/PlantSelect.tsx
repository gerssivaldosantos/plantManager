import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect() {
    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
            <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>
                    Você quer colocar sua planta?
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer:{
        padding:20,
    },
    subcontainer: {},
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
        marginTop: 15,
    },
});
