import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button(props) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={props.function}
            >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        fontFamily: fonts.heading,
        paddingHorizontal: 114
    }
})