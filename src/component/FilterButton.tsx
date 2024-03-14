import { Button } from "native-base";
import React, { PropsWithChildren } from "react"
import { Text, View } from "react-native"
import { create } from "zustand";

// interface buttonColor {
//     light: boolean,
//     switchToGreen: () => void
// }

// export const useTheFilterStore = create<buttonColor>()((set) => ({
//     light: false,
//     switchToGreen: () => set((state) => ({ light: !state.light}))
// }))

interface FilterButtonProps extends PropsWithChildren {
    active: boolean
    onPressButton: () => void
}

function FilterButton(props: FilterButtonProps): React.JSX.Element {
    return (
        <View>
            <Button
                style={{
                    backgroundColor: props.active ? 'green' : 'white',
                    borderColor: "black",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: 10
                }}
                onPress={props.onPressButton}
            >
                <Text style={{
                    color: props.active ? 'white' : 'black'}}
                >
                    {props.children}
                </Text>
            </Button>
        </View>
    )
}

export default FilterButton



