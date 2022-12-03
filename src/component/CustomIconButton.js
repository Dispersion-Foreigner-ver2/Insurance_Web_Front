import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";


const CustomIconButton = ({source, func}) => {
    return (
        <TouchableOpacity onPress={func}>
            <Image source={source} style={styles.image}/>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        margin: 5,
    },

});


export default CustomIconButton;
