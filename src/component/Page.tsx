import { PropsWithChildren } from "react";
import { View } from "react-native";
import { styles } from "../StylesCSS/Styles";

interface PageProps extends PropsWithChildren {

}

export default function Page(props: PageProps){
    return (
      <View style={styles.container}>
        {props.children}
      </View>
    )
}