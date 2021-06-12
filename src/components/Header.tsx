import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

var userImage = require("../assets/perfil.png");

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.userName}>Olá,</Text>
                <Text style={styles.greeting}>Gerssivaldo</Text>
            </View>
            <Image style={styles.image} source={userImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
       
        //backgroundColor: colors.red
    },
    image: {
        height: 56,
        width: 56,
        borderRadius: 27,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName:{
        fontSize:32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight:40
    }


});
