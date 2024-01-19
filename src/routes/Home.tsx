import React from "react";
import { StyleSheet, Text, View} from "react-native";
import GoToPageButton from "../component/GoToPageButton";


export default function Home(): React.JSX.Element {
    return (
        
        <View style={styles.container}>
            <Text>Home Page</Text>
            <GoToPageButton title="Connexion" page="Connexion" />
            <GoToPageButton title="Inscription" page="Inscription" />
            <GoToPageButton title="Information Itineraire" page="InformationItineraire"/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "blue",
        borderStyle: "solid",
        borderWidth: 1,
    },
});