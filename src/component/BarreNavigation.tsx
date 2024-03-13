import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GoToPageButton from "./GoToPageButton";

import { StraggerComposants } from "./NativeBase/StaggerComposants";


export default function BarreNavigation(): React.JSX.Element {
    return (
        <>
            <View style={styles.BarreNavigation}>

                <StraggerComposants />

                <GoToPageButton title="1" page="1" />
                <GoToPageButton title="go" page="go" />
                <GoToPageButton title="2" page="1" />

                <StraggerComposants />

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    BarreNavigation: {
        padding: 10,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        width: "80%",
        backgroundColor: "green",
        justifyContent: "center",
        flexDirection: 'row',
    },
});