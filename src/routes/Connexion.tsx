import React from "react";
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Page from "../component/Page";
import AsyncStorage from "@react-native-async-storage/async-storage";



const storeInfosUserConnexion = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-jsonValueOfUserConnected', jsonValue);
    } catch (e) {
        // saving error
    }
};
export default function Connexion({ navigation }): React.JSX.Element {
    const [mail, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function handleLogin(myMail: string, myPassword: string): Promise<void> {
        try {
            const response = await fetch("http://localhost:3000/api/auth/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ identifier: myMail, password: myPassword }),
            });
            const data = await response.json();
            if (data) {
                //save Token
                storeInfosUserConnexion(data)
                //Add Navigate
               
                navigation.navigate("Profile") //, {token: data.token, otherData: data});
            }
            else{
                navigation.navigate("Connexion");    
            }


        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <Page>
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
                <TouchableOpacity onPress={() => { handleLogin(mail, password) }}>
                    <Text>Se Connecter</Text>
                </TouchableOpacity>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
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
