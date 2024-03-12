import React from "react";
import {Text} from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";


export default function Home(): React.JSX.Element {
    return (
        
        <Page>
            <Text>Home Page</Text>
            <BarreNavigation/>
        </Page>
        
    );
}
