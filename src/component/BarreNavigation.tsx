import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StraggerComposants } from "./NativeBase/StaggerComposants";
import { StylesCSS } from "../StylesCSS/Styles";

export default function BarreNavigation(): React.JSX.Element {
    return (
        <>
            <View style={styles.BarreNavigation}>

                <StraggerComposants actions={[{ route: "Connexion", iconName: "location-pin" }, { route: "Inscription", iconName: "photo-library" }, { route: "InformationItineraire", iconName: "photo-library" }, { route: "Filtres", iconName: "location-pin" },]} />

                <Pressable style={StylesCSS.button} onPress={() => alert("1")}>
                    <Text style={StylesCSS.text}> 1 </Text>
                </Pressable>

                <Pressable style={StylesCSS.button} onPress={() => alert("go")}>
                    <Text style={StylesCSS.text}> go </Text>
                </Pressable>

                <Pressable style={StylesCSS.button} onPress={() => alert("2")}>
                    <Text style={StylesCSS.text}> 2 </Text>
                </Pressable>

                <StraggerComposants actions={[]} />

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    BarreNavigation: {
        padding: 10,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        width: "80%",
        backgroundColor: "green",
        justifyContent: "center",
        flexDirection: 'row',
    },
});