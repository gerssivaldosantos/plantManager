import React from "react";
import {
    StatusBar,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <Text style={styles.title}>
                    Gerencie {"\n"}
                    suas plantas {"\n"}
                    de forma fácil
                </Text>
                <Image
                    style={styles.image}
                    source={require("../assets/watering.png")}
                    resizeMode="contain"
                />
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. Nós cuidamos de
                    lembrar você sempre que precisar
                </Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Feather
                        style={styles.buttonIcon}
                        size={30}
                        name="chevron-right"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    subcontainer: {
        flex: 1,
        //backgroundColor:'green',
        paddingHorizontal: 40,
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 32,
        color: colors.heading,
        textAlign: "center",
        marginTop: 38,
        fontFamily: fonts.heading,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        color: "white",
    },
    image: {
        //width by resized mode in props component
        height: Dimensions.get("window").width * 0.7,
    },
});
