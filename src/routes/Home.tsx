import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import { Link, useNavigation } from "@react-navigation/native";
import { useFiltersStore } from "../../App";

export default function Home(): React.JSX.Element {

    const { transport } = useFiltersStore()
    return (


        <Page>
            <View style={styles.aaa}>
                <Text>Home Page</Text>

                {/* Affichage des filtres transports sélectionnés (exemple test) */}
                <Text>{JSON.stringify(transport)}</Text>
                <BarreNavigation />
            </View>
        </Page>



    );
}

const styles = StyleSheet.create({
    aaa: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#e0ffff",
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 5,
    },
});
