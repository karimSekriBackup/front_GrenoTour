import React from "react";
import {  StyleSheet,  View} from "react-native";
import { Text } from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";

export default function InformationItineraire(): React.JSX.Element {
 

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text>Information Itineraire</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#e0ffff",
    },
});