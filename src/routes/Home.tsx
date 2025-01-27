import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import MapView from 'react-native-maps';
import { useFiltersStore } from "../../App";

export default function Home(): React.JSX.Element {

    const { transport } = useFiltersStore()
    return (

        <Page>
            <View style={styles.Page_home}>
                <View style={styles.Menu_haut}>
                    <Text>menu du haut</Text>
                </View>

                <MapView style={styles.Map} initialRegion={{
                    latitude: 45.166672,
                    longitude: 5.71667,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}>
                    <Image style={styles.logo} source={require('../Img/logo.png')} />
                </MapView>
                <Text>Home Page</Text>
                {/* Affichage des filtres transports sélectionnés (exemple test) */}
                <Text>{JSON.stringify(transport)}</Text>
                <BarreNavigation />
            </View>
        </Page>


    );
}

const styles = StyleSheet.create({
    Menu_haut: {
        height: "10%",
        width: "100%",
        backgroundColor: "gray",
        borderColor: "yellow",
        borderStyle: "solid",
        borderWidth: 2
    },
    Map: {
        height: "80%",
        width: "100%",
        alignItems: "center"
    },
    logo: {
        height: 60,
        width: 150,
    },
    Page_home: {
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
