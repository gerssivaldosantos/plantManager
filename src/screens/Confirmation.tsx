import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>😄</Text>
                <Text style={styles.title}>Tudo OK!</Text>
                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas plantas com muito
                    cuidado
                </Text>
            </View>
            <View style={styles.footer}>
                <Button title="Continuar" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        alignItems:'center',
        width:"80%",
        justifyContent:'center'
    },
    emoji: {
        fontSize:80,
        textAlign:'center'
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: "center",
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingVertical: 20,
        color: colors.heading,
    },
    footer: {
        alignItems:'center',
        //backgroundColor:'#121212',
        width:'100%',
        paddingHorizontal: 75
    },
});
