import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//With this interface I can make my custom button inherit
// the Title props and the other props referring to a touchable Opacity
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

//The ""...rest" is the ternary operator
export function Button({title, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.container}
          
            {...rest}
            >
            <Text style={styles.text}>
                {title}
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
        width:'90%'

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        fontFamily: fonts.heading,
        paddingHorizontal: 20
    }
})