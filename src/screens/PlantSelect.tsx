import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";
import { EnviromentButton } from "../components/EnviromentButton";
import { TouchableOpacity } from "react-native-gesture-handler";
interface EnviromentProps {
    key: string;
    title: string;
}

export function PlantSelect() {
    const [enviroments, setenviroments] = useState<EnviromentProps[]>([]);
    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get("/plants_environments");
            setenviroments(data);
        }
        fetchEnviroment();
    }, []);
    async function funcaoTeste() {
       
        const { data } = await api.get("/plants_environments");
        alert(data)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header />
                    <TouchableOpacity
                        style={{
                            width: 90,
                            height: 50 ,
                            backgroundColor: colors.body_dark,
                        }}
                        onPress={funcaoTeste}
                    />
                    <Text style={styles.title}>Em qual ambiente</Text>
                    <Text style={styles.subtitle}>
                        Você quer colocar sua planta?
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={enviroments}
                        renderItem={({ item }) => (
                            <EnviromentButton title={item.title} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        contentContainerStyle={styles.enviromentList}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 20,
    },
    subcontainer: {},
    title: {
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15,
    },
    subtitle: {
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20,
        marginTop: 15,
    },
    enviromentList: {},
});
