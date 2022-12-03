import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";

const CustomStaffList = ({staff ,search, pay, move, remove}) => {

    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{staff.id}</Text>
            </View>
            <View style={styles.idTextView}>
                <Text style={styles.departmentText}>{staff.department}</Text>
            </View>
            <View style={styles.nameDateTextView}>
                <Text style={styles.nameText}>{staff.name}</Text>
                <Text style={styles.dateText}>{staff.date}</Text>
            </View>
            <CustomIconButton func={search} source={require("../../assets/icons/search.png")}/>
            <CustomIconButton func={pay} source={require("../../assets/icons/paid.png")}/>
            <CustomIconButton func={move} source={require("../../assets/icons/move.png")}/>
            <CustomIconButton func={remove} source={require("../../assets/icons/remove_person.png")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 70,
        marginBottom: 10,
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
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    departmentText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
    typeImageView: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    typeImage: {
        width: 40,
        height: 40,
    },
    nameDateTextView: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
    },
    nameText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginBottom: 5,

    },
    dateText: {
        fontSize: 15,
        fontStyle: "italic",
        color: "gray",
    },
    checkImage: {
        width: 30,
        height: 30,
        padding: 5,
    },

});

export default CustomStaffList;
