import React from "react";
import { StyleSheet, Text, View} from "react-native";
import GoToPageButton from "./GoToPageButton";


export default function BarreNavigation(): React.JSX.Element {
    return (
        
        <View style={styles.BarreNavigation}>
            <GoToPageButton title="1" page="Connexion" />
            <GoToPageButton title="2" page="Inscription" />
            <GoToPageButton title="3" page="InformationItineraire"/>
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
        flexDirection:'row',
    },
});