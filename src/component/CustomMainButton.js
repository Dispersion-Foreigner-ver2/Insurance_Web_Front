import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


const CustomMainButton = ({buttonText, func}) => {
    return (
            <TouchableOpacity onPressOut={func}>
                <View style={styles.buttonTextView}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    buttonTextView: {
        backgroundColor: "skyblue",
        borderRadius: 20,
        width: "100%",
        height: 160,
        justifyContent: "center",
        marginTop: 30,
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
    },
    buttonText: {
        textAlign: "center",
        justifyContent: "flex-end",
        fontSize: 23,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "white",
        marginBottom: 10,

    },
});

export default CustomMainButton;
