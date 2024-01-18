import React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/routes/Home";
import Authentification from "./src/routes/Authentication";
import Connexion from "./src/routes/Connexion";

// const Tab =
//     Platform.OS === "android"
//         ? createMaterialBottomTabNavigator()
//         : createBottomTabNavigator();

const Tab = createStackNavigator();

export default function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                  <Tab.Screen
                    name="Connexion"
                    component={Connexion}
                />
                <Tab.Screen
                    name="Authentification"
                    component={Authentification}
                />
                
            </Tab.Navigator>
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
