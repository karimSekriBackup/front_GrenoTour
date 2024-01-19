import React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./src/routes/Home";
import Inscription from "./src/routes/Inscription";
import Connexion from "./src/routes/Connexion";
import InformationItineraire from "./src/routes/InformationItineraire";

// const Tab =
//     Platform.OS === "android"
//         ? createMaterialBottomTabNavigator()
//         : createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                  <Stack.Screen
                    name="Connexion"
                    component={Connexion}
                />
                <Stack.Screen
                    name="Inscription"
                    component={Inscription}
                />
                <Stack.Screen
                    name="InformationItineraire"
                    component={InformationItineraire}
                    options={{ title: 'Information Itineraire' }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
