import React from "react";
import {  StyleSheet,  View} from "react-native";
import { Text } from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";
import { StylesCSS } from "../StylesCSS/Styles";

export default function InformationItineraire(): React.JSX.Element {
 

    return (
        <SafeAreaView style={StylesCSS.container}>
            <View>
            <Text>Information Itineraire</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e0ffff",
    },
});