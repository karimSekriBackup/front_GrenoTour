import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoToPageButton from "./GoToPageButton";
import { StraggerComposants } from "./NativeBase/StaggerComposants";


export default function BarreNavigation(): React.JSX.Element {
    return (
        <>
            <View style={styles.BarreNavigation}>

                <StraggerComposants Button_Page_1="Inscription" Button_Page_2="Connexion" Button_Page_3="InformationItineraire" Button_Page_4="" />

                <GoToPageButton title="1" page="Connexion" />
                <GoToPageButton title="go" page="Inscription" />
                <GoToPageButton title="2" page="InformationItineraire" />

                <StraggerComposants Button_Page_1="" Button_Page_2="" Button_Page_3="" Button_Page_4="" />

            </View>
        </>
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