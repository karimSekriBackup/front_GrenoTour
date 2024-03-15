import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";



export default function Home(): React.JSX.Element {
    
    
   
    return (

        <Page>
            <View style={styles.aaa}>
            
                <BarreNavigation/>
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
