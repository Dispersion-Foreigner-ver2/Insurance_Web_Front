import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";


const CustomButton = ({func, text}) => {

    return (

        <TouchableOpacity style={styles.button} onPressOut={func}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: "skyblue",
        opacity: 0.7,
        height: 50,
        width: 200,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        alignSelf: "center"
    },
});

export default CustomButton;

