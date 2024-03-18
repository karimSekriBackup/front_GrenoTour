import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Page from "../component/Page";

export default function Register(): React.JSX.Element {
    const navigation = useNavigation<Nav>();
    const [login, onChangeLogin] = React.useState("");
    const [mail, onChangeMail] = React.useState("");
    const [telephone, onChangeTelephone] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [hidePass, setHidePass] = React.useState(true);

    async function handleRegister(myMail: string, myPassword: string): Promise<void> {
        try {
            const response = await fetch("https://yak-awake-intensely.ngrok-free.app/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: myMail, password: myPassword }),
            })
            const data = await response.json();
            if (data) {
                //Envoyer mail de verification
                console.log("inscription OK", data);
                Alert.alert(" Inscription ok")
            }
            else{
                navigation.navigate('Inscription');    
            }
        } catch (error) {
            console.log("erreur handleRegister : ", error); 
        }
    }

    return (
        <Page>
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Pseudo"
            /> */}

            <TextInput
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="Mail"
            />

            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeTelephone}
                value={telephone}
                placeholder="Telephone"

            /> */}
          

            <TextInput
                label="Password"
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry  = {hidePass}               
                right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)}/>}
                
            />


            <Button
                title="Inscription"
                onPress={()=>handleRegister(mail, password)}
            />
            
        </Page>
    );
}

const styles = StyleSheet.create({
    input: {
        //backgroundColor: "#e0ffff",
    },
});
