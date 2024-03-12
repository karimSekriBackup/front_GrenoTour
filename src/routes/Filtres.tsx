import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StylesCSS } from "../StylesCSS/Styles";

export default function Filtres(): React.JSX.Element {

    return (
        <SafeAreaView style={StylesCSS.container}>
            <View>
                <Text>Test</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});