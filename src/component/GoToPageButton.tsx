import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet,  View, Pressable, Text} from "react-native";

interface GoToPageButtonProps {
    title: string;
    page: string;
}

export default function GoToPageButton({title , page }: GoToPageButtonProps): React.JSX.Element {
    
    const navigation = useNavigation();
    
    
    const onPressButton = () => {
        navigation.navigate(page);
        
    }


    return (
        <View style={styles.container}>
            <Button 
                title={`${title}`}
                onPress={onPressButton}
                
            />

        <Pressable style={styles.button} onPress={onPressButton}>
             <Text style={styles.text}>{title}</Text>
        </Pressable>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 1,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "green",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});