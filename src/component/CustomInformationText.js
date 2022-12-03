import React from "react";
import {StyleSheet, Text, View} from "react-native";


const CustomInformationText = ({title, content}) => {
    return (
        <View style={styles.informationView}>
            <Text style={styles.informationTitle}>{title}</Text>
            <Text style={styles.informationContent}>{content}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    informationView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderColor: "#c7ecee",
        borderBottomWidth: 0.5,

    },
    informationTitle: {
        fontSize: 25,
        marginRight: 20,
        fontWeight: "bold",
    },
    informationContent: {
        fontSize: 20,
        width: 200,
        // fontWeight: "bold",
    },
});

export default CustomInformationText;
