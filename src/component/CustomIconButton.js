import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";


const CustomIconButton = ({source, func}) => {
    return (
        <TouchableOpacity onPressOut={func}>
            <Image source={source} style={styles.image}/>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        margin: 10,
    },

});


export default CustomIconButton;
