import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";


const CustomUnderwriteList = ({contract}) => {

    return (
        contract.underwrite === true ? (
            <View style={styles.trueContainer}>
                <View style={styles.trueIdTextView}>
                    <Text style={styles.trueIdText}>{contract.id}</Text>
                </View>
                <View style={styles.trueNameExpTextView}>
                    <Text style={styles.trueNameText}>{contract.insuranceName}</Text>
                    <Text style={styles.trueExpText}>{contract.customerName}</Text>
                </View>
            </View>
        ) : (
            <View style={styles.container}>
                <View style={styles.idTextView}>
                    <Text style={styles.idText}>{contract.id}</Text>
                </View>
                <View style={styles.nameExpTextView}>
                    <Text style={styles.nameText}>{contract.insuranceName}</Text>
                    <Text style={styles.expText}>{contract.customerName}</Text>
                </View>
                <View style={styles.buttonView}>
                    <CustomIconButton source={require("../../assets/icons/underwrite.png")}/>
                </View>
            </View>
        )
    );

};


const styles = StyleSheet.create({
    trueContainer: {
        flex: 1,
        width: "100%",
        height: 70,
        marginBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A9EDBB"
    },
    trueIdTextView: {
        padding: 10,
        borderColor: "gray",
        borderRightWidth: 0.3,
        height: "100%",
        justifyContent: "center",

    },
    trueIdText: {
        fontSize: 30,
        color: "#55C272",
        fontWeight: "bold",
    },
    trueNameExpTextView: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        marginRight: 20,
    },
    trueNameText: {
        fontSize: 25,
        color: "#55C272",
        fontWeight: "bold",
        marginBottom: 5,

    },
    trueExpText: {
        fontSize: 20,
        fontStyle: "italic",
        color: "#FBFFFC",
    },

    container: {
        flex: 1,
        backgroundColor: "#FFBBBB",
        width: "100%",
        height: 70,
        marginBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        flexDirection: "row",
        alignItems: "center",
    },
    idTextView: {
        padding: 10,
        borderColor: "gray",
        borderRightWidth: 0.3,
        height: "100%",
        justifyContent: "center",

    },
    idText: {
        fontSize: 30,
        color: "#FF7575",
        fontWeight: "bold",
    },
    nameExpTextView: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        marginRight: 20,
    },
    nameText: {
        fontSize: 25,
        color: "#FF7575",
        fontWeight: "bold",
        marginBottom: 5,

    },
    expText: {
        fontSize: 20,
        fontStyle: "italic",
        color: "#FFFEFE",
    },

    buttonView: {
        width: 200,
        alignItems: "flex-end"
    },


});


export default CustomUnderwriteList;
