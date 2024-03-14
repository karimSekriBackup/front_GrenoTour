import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Page from "../component/Page";
import GoToPageButton from "../component/GoToPageButton";
import MultiChoices from "../component/MultiChoices";
import { Button } from "native-base";

export default function Filtres(): React.JSX.Element {

    const [transport, setTransport] = useState([])
    const [typeSejour, setTypeSejour] = useState([])
    const [lieu, setLieu] = useState([])
    const [typeEvent, setTypeEvent] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [boisson, setBoisson] = useState([])

    const handleStateTransp = useCallback(
        (indexClicked: number) => setTransport(
            transport.includes(indexClicked) ? transport.filter(i => i !== indexClicked) : [...transport, indexClicked]
        ),[transport]
    );

    const handleStateSej = useCallback(
        (indexClicked: number) => setTypeSejour(
            typeSejour.includes(indexClicked) ? typeSejour.filter(i => i !== indexClicked) : [...typeSejour, indexClicked]
        ),[typeSejour]
    );

    const handleStateLieu = useCallback(
        (indexClicked: number) => setLieu(
            lieu.includes(indexClicked) ? lieu.filter(i => i !== indexClicked) : [...lieu, indexClicked]
        ),[lieu]
    );

    const handleStateEvent = useCallback(
        (indexClicked: number) => setTypeEvent(
            typeEvent.includes(indexClicked) ? typeEvent.filter(i => i !== indexClicked) : [...typeEvent, indexClicked]
        ),[typeEvent]
    );
    
    const handleStateCuis = useCallback(
        (indexClicked: number) => setCuisine(
            cuisine.includes(indexClicked) ? cuisine.filter(i => i !== indexClicked) : [...cuisine, indexClicked]
        ),[cuisine]
    );

    const handleStateBoiss= useCallback(
        (indexClicked: number) => setBoisson(
            boisson.includes(indexClicked) ? boisson.filter(i => i !== indexClicked) : [...boisson, indexClicked]
        ),[boisson]
    );

    return (
        <Page>
            <View style={styles.header}>
                <Text>Affichage des activités</Text>
            </View>
            <View style={styles.header}>
                <GoToPageButton title="Carte" page="Home" />
                {/* <Checkbox></Checkbox> */}
            </View>
                <MultiChoices title="Transport" choices={["à pied", "vélo", "bus", "tram", "voiture"]} activesIndexes={transport} activateButton={handleStateTransp} />
                <MultiChoices title="Type de séjour" choices={["romantique","en famille", "nature", "culturel"]} activesIndexes={typeSejour} activateButton={handleStateSej} />
                <MultiChoices title="Lieu" choices={["gratuit", "extérieur", "intérieur", "point de vue"]} activesIndexes={lieu} activateButton={handleStateLieu} />
                <MultiChoices title="Type d'évènement" choices={["théâtre", "musique", "fête", "nature", "danse", "sports"]} activesIndexes={typeEvent} activateButton={handleStateEvent} />
                <MultiChoices title="Cuisine" choices={["végé", "locale", "végan", "gourmande", "monde"]} activesIndexes={cuisine} activateButton={handleStateCuis} />
                <MultiChoices title="Boisson" choices={["bière", "vin", "pub", "terrasse", "cosy"]} activesIndexes={boisson} activateButton={handleStateBoiss} />
            <View style={styles.actions}>
                <Button style={styles.effacer}>Effacer</Button>
                <Button style={styles.appliquer}>Appliquer</Button>
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