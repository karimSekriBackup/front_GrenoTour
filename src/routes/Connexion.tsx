import React from "react";
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Connexion(): React.JSX.Element {
    const [mail, onChangeMail] = React.useState("");
    const [Password, onChangePassword] = React.useState("");
    

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={Password}
                placeholder="Username"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="Mail"
            />
            <Button
                title="Connexion"
                onPress={() => Alert.alert("Button Connexion ok")}
            />
            <Button
                title="New Account"
                onPress={() => Alert.alert("Button New Account ok")}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#e0ffff",
    },
});
