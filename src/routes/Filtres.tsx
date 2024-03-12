import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../component/Page";

export default function Filtres(): React.JSX.Element {

    return (
        <Page>
            <View style={styles.header}>

            </View>
            <View style={styles.header}>
                
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
        backgroundColor: "CAD1C7",    
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 1
    },
    title : {
        backgroundColor: "00980d",
    },
    choiceToDo : {
    },

    actions : {
        height: "100%",
        width: "100%",
        backgroundColor: "#d3d3d3",
        flex: 1,
        borderColor: "green",
        borderStyle: "solid",
        borderWidth: 1
    },
    effacer : {
        backgroundColor : "#cd5c5c"
    },
    appliquer : {
        backgroundColor : "#f4a460"
    }
});