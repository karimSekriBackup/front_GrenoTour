import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoToPageButton from "./GoToPageButton";

import { HStack, Checkbox, Center, NativeBaseProvider } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";


export default function BarreNavigation(): React.JSX.Element {
    return (

        <View style={styles.BarreNavigation}>
            <GoToPageButton title="1" page="Connexion" />
            <GoToPageButton title="2" page="Inscription" />
            <GoToPageButton title="3" page="InformationItineraire" />

            <Checkbox value="test" aria-label="toto" />

        </View>

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