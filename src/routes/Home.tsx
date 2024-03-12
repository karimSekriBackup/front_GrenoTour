import React from "react";
import {Text, View} from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import { StylesCSS } from "../StylesCSS/Styles";


export default function Home(): React.JSX.Element {
    return (
        
        <Page>
            <View style={StylesCSS.aaa}>
                <Text>Home Page</Text>
                <BarreNavigation/>
            </View>
        </Page>
        
    );
}