import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import GoToButton from "../component/GoToButton";

export default function Home(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <GoToButton title="Connexion" />
            <GoToButton title="Inscription" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
