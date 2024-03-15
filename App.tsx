import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/routes/Home";
import Inscription from "./src/routes/Inscription";
import Connexion from "./src/routes/Connexion";
import InformationItineraire from "./src/routes/InformationItineraire";
import Filtres from "./src/routes/Filtres";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NativeBaseProvider } from 'native-base';
import { create } from "zustand";
import Profile from "./src/routes/Profile";

// const Tab =
//     Platform.OS === "android"
//         ? createMaterialBottomTabNavigator()
//         : createBottomTabNavigator();


/* {
    train: false,
    bus: true,

    nature: true,
    romantique: false,
    famille: false
} */

interface Filters {
    transport: number[],
    typeSejour: number[],
    lieu: number[],
    typeEvent: number[],
    cuisine: number[],
    boisson: number[],
    setTransport: (newtransp: number[]) => void,
    setTypeSejour: (newtypesej: number[]) => void,
    setLieu: (newlieu: number[]) => void,
    setTypeEvent: (newtypeevent: number[]) => void,
    setCuisine: (newcuisi: number[]) => void,
    setBoisson: (newboiss: number[]) => void
}

export const useFiltersStore = create<Filters>()((set) => ({
    transport: [],
    typeSejour: [],
    lieu: [],
    typeEvent: [],
    cuisine: [],
    boisson: [],
    setTransport: (newtransp) => set(() => ({ transport: newtransp })),
    setTypeSejour: (newtypesej) => set(() => ({ typeSejour: newtypesej })),
    setLieu: (newlieu) => set(() => ({ lieu: newlieu })),
    setTypeEvent: (newtypeevent) => set((state) => ({ typeEvent: state.typeEvent, newtypeevent })),
    setCuisine: (newcuis) => set((state) => ({ cuisine: state.cuisine, newcuis })),
    setBoisson: (newboiss) => set((state) => ({ boisson: state.boisson, newboiss }))
}))

const Stack = createStackNavigator();

export function App(): React.JSX.Element {

    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
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
                            options={{ title: "Information Itineraire" }}
                        />
                        <Stack.Screen
                            name="Filtres"
                            component={Filtres}
                            options={{ title: "Filtres" }}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={{ title: "Profile" }}
                        />

                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </NativeBaseProvider>
    );
}


let AppEntryPoint = App;

export default AppEntryPoint;