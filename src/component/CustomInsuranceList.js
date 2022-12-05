import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import CustomIconButton from "../component/CustomIconButton";


const CustomInsuranceList = ({insuranceInformation,authorizeInsurance, deleteInsurance}) => {


    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{insuranceInformation.insurance.id}</Text>
            </View>
            <View style={styles.typeImageView}>
                {insuranceInformation.insuranceType === "C" ?
                    (<Image source={require("../../assets/icons/car.png")} style={styles.typeImage}/>)
                    : (insuranceInformation.insuranceType === "F" ? (
                        <Image source={require("../../assets/icons/fire.png")} style={styles.typeImage}/>
                    ) : (
                        <Image source={require("../../assets/icons/ship.png")} style={styles.typeImage}/>
                    ))}

            </View>
            <View style={styles.nameExpTextView}>
                <Text style={styles.nameText}>{insuranceInformation.insurance.name}</Text>
                <Text style={styles.expText}>{insuranceInformation.insurance.explanation}</Text>
            </View>
            <View style={styles.checkImageView}>
            {insuranceInformation.insurance.authorization === true ? (
                    <Image style={styles.checkImage} source={require("../../assets/icons/check.png")} />
            ) :(
                    <Image style={styles.checkImage}  source={require("../../assets/icons/no_check.png")} />
            )}
            {insuranceInformation.insurance.authorization === false && <CustomIconButton func={authorizeInsurance} source={require("../../assets/icons/edit.png")}/> }
            <CustomIconButton func={deleteInsurance} source={require("../../assets/icons/delete.png")}/>
            </View>
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
        width: 60,

        borderColor: "gray",
        borderRightWidth: 0.3,
        height: "100%",
        justifyContent: "center",

    },
    idText: {
        textAlign: "center",
        fontSize: 30,
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
    nameExpTextView: {
        padding: 10,
        width: 90,
        height: "100%",
        justifyContent: "center",
        marginRight: 20,
    },
    nameText: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        marginBottom: 5,

    },
    expText: {
        fontSize: 15,
        fontStyle: "italic",
        color: "gray",
    },
    checkImageView: {
        flexDirection: "row",
        width: 150,
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    checkImage: {
        width: 20,
        height: 20,
    },


});


export default CustomInsuranceList;
