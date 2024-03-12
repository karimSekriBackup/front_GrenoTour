import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../component/Page";
import GoToPageButton from "../component/GoToPageButton";

export default function Filtres(): React.JSX.Element {

    return (
        <Page>
            <View style={styles.header}>
                <Text>Affichage des activités</Text>
            </View>
            <View style={styles.header}>
                <GoToPageButton title="Carte" page="Home" />
                {/* <Checkbox></Checkbox> */}
            </View>
            <View style={styles.filters}>
                <View></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Transport</Text>
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Type de séjour</Text>
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Lieu</Text>
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Evènements</Text>
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Cuisine</Text>
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Boisson</Text>  
                </View>
                <View style={styles.choiceToDo}></View>
            </View>
            
            <View style={styles.actions}>
                <button style={styles.effacer}>Effacer</button>
                <button style={styles.appliquer}>Appliquer</button>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    header : {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#d3d3d3",
        borderColor: "blue",
        borderStyle: "solid",
        borderWidth: 1
    },
    filters : {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "CAD1C7"
    },
    title : {
        backgroundColor: "#00980d",
        height: "40%"
    },
    choiceToDo : {
        height: "60%"
    },

    actions : {
        height: "100%",
        width: "100%",
        backgroundColor: "#d3d3d3",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
    },
    effacer : {
        height: "70%",
        backgroundColor: "#cd5c5c",
        borderRadius: 10
    },
    appliquer : {
        height: "70%",
        backgroundColor : "#f4a460",
        borderRadius: 10
    }
});