import React from "react";
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Button } from "react-native";
import Page from "../component/Page";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Profile from "./Profile";
import { func } from "prop-types";



const storeInfosUserConnexion = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-jsonValueOfUserConnected', jsonValue);
    } catch (e) {
        // saving error
    }
};
export default function Connexion(): React.JSX.Element {
    const [mail, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigation = useNavigation<Nav>();
    
    async function handleLogin(myMail: string, myPassword: string): Promise<void> {
        try {
            const response = await fetch("https://yak-awake-intensely.ngrok-free.app/api/auth/", {
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
               
                navigation.navigate('Profile') //, {token: data.token, otherData: data});
            }
            else{
                navigation.navigate('Connexion');    
            }
            
            

        } catch (error) {
            console.log("erreur handleLogin : ", error);
            
        }
    }
    function handleRegister() : void {
        navigation.navigate('Inscription');  
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
                <Button
                    title="Se connecter"
                    onPress={() => handleLogin(mail, password) }
                />
                <Button
                    title="Inscription"
                    onPress={() => handleRegister()}
                />
                {/* <TouchableOpacity onPress={() => { handleLogin(mail, password) }}>
                    <Text>Se Connecter</Text>
                </TouchableOpacity> */}
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
