import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Page from "../component/Page";

export default function Authentification(): React.JSX.Element {
    const navigation = useNavigation();
    const [login, onChangeLogin] = React.useState("");
    const [mail, onChangeMail] = React.useState("");
    const [telephone, onChangeTelephone] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [hidePass, setHidePass] = React.useState(false);

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

            <TextInput
                style={styles.input}
                onChangeText={onChangeTelephone}
                value={telephone}
                placeholder="Telephone"

            />
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                right={
                    <TextInput.Icon
                        name={hidePass ? "eye" : "eye-off"}
                        onPress={() => setHidePass(!hidePass)}
                    />
                }

            /> */}

            <TextInput
                label="Password"
                secureTextEntry  = {hidePass}               
                right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)}/>}
                
            />


            <Button
                title="Inscription"
                onPress={() => Alert.alert("Button Inscription ok")}
            />
            {/* <Button
                title="Connexion"
                onPress={() => Alert.alert("Button Connexion ok")}
            /> */}
            {/* <Button title='Connexion' onPress={() => navigation.navigate("Connexion")}></Button> */}
        </Page>
    );
}

const styles = StyleSheet.create({
    input: {
        //backgroundColor: "#e0ffff",
    },
});
