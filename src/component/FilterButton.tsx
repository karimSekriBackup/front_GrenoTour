import React, { PropsWithChildren } from "react"
import { Pressable, Text, View } from "react-native"
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
            <Pressable
                style={{
                    backgroundColor: props.active ? 'green' : 'white',
                }}
                onPress={props.onPressButton}
            >
                <Text style={{color: props.active ? 'white' : 'black' }}>
                    {props.children}
                </Text>
            </Pressable>
        </View>
    )
}

export default FilterButton



