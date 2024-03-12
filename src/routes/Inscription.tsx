import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Alert, Button, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";
import { StylesCSS } from "../StylesCSS/Styles";

export default function Authentification(): React.JSX.Element {
    const navigation = useNavigation();
    const [login, onChangeLogin] = React.useState("");
    const [mail, onChangeMail] = React.useState("");

    return (
        <SafeAreaView style={StylesCSS.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Username"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="Mail"
            />

            <Button
                title="Go"
                onPress={() => Alert.alert("Button Go ok")}
            />
            <Button
                title="Connexion"
                onPress={() => Alert.alert("Button Connexion ok")}
            />
            {/* <Button title='Connexion' onPress={() => navigation.navigate("Connexion")}></Button> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e0ffff",
    },
});
