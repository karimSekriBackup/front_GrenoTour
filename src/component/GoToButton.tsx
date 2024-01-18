import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet,  View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";



export default function GoToButton({title }: { title: string }): React.JSX.Element {
    const navigation = useNavigation();
    const onPressButton = () => {
        navigation.navigate(title);
        console.log("ok")
    }
    return (
        <View>
            <Button
                title={`${title}`}
                onPress={onPressButton}
                
            />
        </View>
        
        
    );
}