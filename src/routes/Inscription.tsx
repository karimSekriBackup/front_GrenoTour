import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Alert, Button, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import Page from "../component/Page";

export default function Authentification(): React.JSX.Element {
    const navigation = useNavigation();
    const [login, onChangeLogin] = React.useState("");
    const [mail, onChangeMail] = React.useState("");

    return (
        <Page>
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
        </Page>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e0ffff",
    },
});
