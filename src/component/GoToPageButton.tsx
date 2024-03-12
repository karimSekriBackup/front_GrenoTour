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
        <Button 
            title={`${title}`}
            onPress={onPressButton}
            
        />
    );
}

const styles = StyleSheet.create({
    button: {
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