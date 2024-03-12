import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Page from "../component/Page";

export default function InformationItineraire(): React.JSX.Element {
 

    return (
        <Page>
            <View>
                <Text>Informations itineraire</Text>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e0ffff",
    },
});