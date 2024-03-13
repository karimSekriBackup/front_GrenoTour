import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../component/Page";
import GoToPageButton from "../component/GoToPageButton";
import FilterButton from "../component/FilterButton";
import MultiChoices from "../component/MultiChoices";

export default function Filtres(): React.JSX.Element {
    const [familleActivated, setFamilleActivated] = useState(true)


    return (
        <Page>
            <View style={styles.header}>
                <Text>Affichage des activités</Text>
            </View>
            <View style={styles.header}>
                <GoToPageButton title="Carte" page="Home" />
                {/* <Checkbox></Checkbox> */}
            </View>
            <View style={styles.filters}>
                <View></View>
            </View>
            <View style={styles.filters}>
                <View style={styles.title}>
                    <Text>Transport</Text>
                </View>
                <View style={styles.choiceToDo}>
                    
                    <FilterButton 
                        active={familleActivated} 
                        onPressButton={() => {
                            setFamilleActivated(!familleActivated)
                        }}
                    >
                        Famille
                    </FilterButton>
                </View>
            </View>
         
            <MultiChoices title="Transport" choices={["à pied", "vélo", "bus", "tram", "voiture"]} activesIndexes={[0,1]} />
            <MultiChoices title="Type de séjour" choices={["romantique","en famille", "nature", "culturel"]} activesIndexes={[0, 3]} />
            <MultiChoices title="Lieu" choices={["gratuit", "extérieur", "intérieur", "point de vue"]} activesIndexes={[1]} />
            <MultiChoices title="Type" choices={["théâtre", "musique", "fête", "nature", "danse", "sports"]} activesIndexes={[1]} />
            <MultiChoices title="Cuisine" choices={["végé", "locale", "végan", "gourmande", "monde"]} activesIndexes={[1]} />
            <MultiChoices title="Boisson" choices={["bière", "vin", "pub", "terrasse", "cosy"]} activesIndexes={[1]} />
            
            <View style={styles.actions}>
                <button style={styles.effacer}>Effacer</button>
                <button style={styles.appliquer}>Appliquer</button>
            </View>
        </Page>
    );
}

const styles = StyleSheet.create({
    header : {
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "#d3d3d3",
        borderColor: "blue",
        borderStyle: "solid",
        borderWidth: 1
    },

    actions : {
        height: "100%",
        width: "100%",
        backgroundColor: "#d3d3d3",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
    },
    effacer : {
        height: "70%",
        backgroundColor: "#cd5c5c",
        borderRadius: 10
    },
    appliquer : {
        height: "70%",
        backgroundColor : "#f4a460",
        borderRadius: 10
    }
});