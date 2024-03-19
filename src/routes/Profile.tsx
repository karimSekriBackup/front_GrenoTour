import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Profile(): React.JSX.Element {

    const [dataUserConnexion, setDataUserConnexion] = useState(null)


    useEffect(() => {
        const getstoredInfosUserConnexion = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('my-jsonValueOfUserConnected');

                console.log("jsonValue", jsonValue);

                if (jsonValue != null) {
                    setDataUserConnexion(JSON.parse(jsonValue))
                }
            } catch (e) {
                // error reading value
            }
        };
        getstoredInfosUserConnexion();

    }, [])

    return (

        <Page>
            <View style={styles.aaa}>
                <Text>Profile </Text>
                <Text>Token  :{JSON.stringify(dataUserConnexion.token)}</Text>
                {/* <Text>Pseudo :{JSON.stringify(dataUserConnexion.Pseudo)}</Text> */}
                <Text>mail  :{JSON.stringify(dataUserConnexion.mail)}</Text> 
                {/* <Text>telephone  :{JSON.stringify(dataUserConnexion.telephone)}</Text> */}


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