import React from "react";
import {Text, View, StyleSheet} from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import { useNavigation } from "@react-navigation/native";


export default function Home({route}): React.JSX.Element {
    console.log('route infos', route, route.params);
    
   const { token , otherData} = route.params;
    return (
        
        <Page>
            <View style={styles.aaa}>
                <Text>Home Page</Text>
            <Text>Token  :{token}</Text>
            <Text>mail  :{otherData.mail}</Text>
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
