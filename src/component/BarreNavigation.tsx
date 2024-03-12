import React from "react";
import { StyleSheet, Text, View} from "react-native";
import GoToPageButton from "./GoToPageButton";


export default function BarreNavigation(): React.JSX.Element {
    return (
        
        <View style={styles.BarreNavigation}>
            <GoToPageButton title="1" page="Connexion" />
            <GoToPageButton title="2" page="Inscription" />
            <GoToPageButton title="3" page="InformationItineraire"/>

            {/* <GoToPageButton title="Connexion" page="Connexion" />
            <GoToPageButton title="Inscription" page="Inscription" />
            <GoToPageButton title="Information Itineraire" page="InformationItineraire"/> */}
        </View>
        
    );
}

const styles = StyleSheet.create({
    BarreNavigation: {
        display: "flex",
        flexDirection:'row',
        padding: 50,
        backgroundColor: "#fff",
        borderColor: "green",
        borderStyle: "solid",
        borderWidth: 5,
    },
});