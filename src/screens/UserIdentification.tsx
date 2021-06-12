import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core";

export function UserIndentification() {
    //THE HOOKS OF THE PROJECT

    //I wouldn't need to infer the type directly in these cases,
    //I preferred to do it to be more didactic, but it would be
    //automatically inferred by TypeScript because the default value is a boolean
    const [isFocused, setisFocused] = useState<boolean>(false);
    const [isFilled, setisFilled] = useState<boolean>(false);
    const [name, setname] = useState<string>();

    const navigation = useNavigation();

    //THE FUNCTIONS OF THE PROJECT

    //Functions for green in focused input
    function handleInputBlur() {
        //learn the perfect cenary  for insert useState
        setisFocused(false);
        setisFilled(!!name);
    }
    function handleInputFocus() {
        setisFocused(true);
    }

    //function for green in changed text input
    function handleInputChange(value: string) {
        //passing parameters
        setisFilled(!!value); //verify if value is fill, isf is fill, pass True, not fill, False
        setname(value);
    }

    function handleSubmit() {
        if (isFilled) {
            navigation.navigate("Confirmation");
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            {isFilled ? "😃" : "🤔"}
                        </Text>
                        <Text style={styles.title}>
                            Como podemos{"\n"} chamar você ?
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {
                                    borderColor: colors.green,
                                },
                            ]}
                            keyboardAppearance={"light"}
                            keyboardType={"default"}
                            autoCompleteType={"name"}
                            autoCorrect={false}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={(text) => handleInputChange(text)}
                        />

                        <Button onPress={handleSubmit} title="confirmar" />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    content: {
        flex: 1,
        width: "100%",
    },
    form: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 54,
        alignItems: "center",
    },
    emoji: {
        fontSize: 44,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: "100%",
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center",
        marginBottom: 40,
    },
});
