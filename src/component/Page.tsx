import { PropsWithChildren } from "react";
import { View } from "react-native";
import { StylesCSS } from "../StylesCSS/Styles";

interface PageProps extends PropsWithChildren {

}

export default function Page(props: PageProps){
    return (
      <View style={StylesCSS.container}>
        {props.children}
      </View>
    )
}