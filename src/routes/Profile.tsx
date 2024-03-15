import React from "react";
import {Text, View, StyleSheet} from "react-native";
import BarreNavigation from "../component/BarreNavigation";
import Page from "../component/Page";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getstoredInfosUserConnexion = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

export default function Profile(): React.JSX.Element {
    
    
   const dataUserConnexion = getstoredInfosUserConnexion();

    console.log(dataUserConnexion)
     return (
         
         <Page>
             <View style={styles.aaa}>
                 <Text>Profile</Text>
             {/* <Text>Token  :{JSON.stringify(dataUserConnexion)}</Text> */}
             
                 
             </View>
         </Page>
         
     );
 }
 
 const styles = StyleSheet.create({
     aaa: {
         height: "100%",
         width: "100%",
         alignItems: "center",
         justifyContent: "flex-end",
         backgroundColor: "#e0ffff",
         borderColor: "red",
         borderStyle: "solid",
         borderWidth: 5,
     },
 });