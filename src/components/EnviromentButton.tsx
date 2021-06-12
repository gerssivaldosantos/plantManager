import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    //the interrogation is for talk that the "Active" is not necessary in call, this is optional
    active?: boolean;
}

export function EnviromentButton({
    title,
    active = false,
    ...rest
}: EnviromentButtonProps) {
    return (
        <RectButton style={[
            //if active is true, apply the Active container
            styles.container, active && styles.containerActive
        
        ]} {...rest}>
            <Text style={[
                
                styles.text, active && styles.textActive
                
                ]}>{title}</Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight:20
    },
    containerActive: {
        backgroundColor: colors.green_light,
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
});
