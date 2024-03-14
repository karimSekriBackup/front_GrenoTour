import { View, StyleSheet, Text } from "react-native"
import FilterButton from "./FilterButton"

interface SettingMultiChoiceProps {
    title: string,
    choices: string[],
    activesIndexes: number[]
    activateButton: (number: number) => void
}

function MultiChoices(props: SettingMultiChoiceProps): React.JSX.Element {

    return (
        <View style={styles.filtersZone}>
            <View style={styles.title}>
                <Text>{props.title}</Text>  
            </View>
            <View style={styles.choiceToDo}>
                {props.choices.map((choice, index) => (
                    <FilterButton
                        key={index}
                        active={props.activesIndexes.includes(index)}
                        onPressButton={() => {
                            props.activateButton(index)
                        }}
                    >
                        {choice}       
                    </FilterButton>
                ))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filtersZone : {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "CAD1C7",
    },
    title : {
        backgroundColor: "#00980d",
        height: "40%"
    },
    choiceToDo : {
        height: "60%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
})

export default MultiChoices