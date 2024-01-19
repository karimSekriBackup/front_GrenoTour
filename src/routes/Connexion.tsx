import React from "react";
import {Text, Button, StyleSheet, TextInput, View,TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Connexion(): React.JSX.Element {
    const [mail, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    async function handleLogin(myMail:string, myPassword:string): Promise<React.JSX.Element> {
        const response = await fetch("http://192.168.1.85:3000/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier: myMail, password: myPassword }),
        });
        const data = await response.json();
        console.log(data);
        return data
      }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={mail}
                    placeholder="Entrez votre email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Mot de passe:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Entrez votre mot de passe"
                    secureTextEntry
                />
                {/* <Button
                    title="Se connecter"
                    onPress={handleLogin(mail, password)}
                /> */}
                <TouchableOpacity onPress={() =>{handleLogin(mail, password)}}>
                    <Text>Se Connecter</Text>
                </TouchableOpacity>
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
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});
