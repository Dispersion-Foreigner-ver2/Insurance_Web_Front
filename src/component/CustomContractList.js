import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";


const CustomContractList = ({contractId, customerId, customerName, insuranceId, insuranceName, func}) => {


    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{contractId}</Text>
            </View>
            <View style={styles.nameExpTextView}>
                <Text style={styles.nameText}>{`[${customerId}] ${customerName}`}</Text>
                <Text style={styles.expText}>{`[${insuranceId}] ${insuranceName}`}</Text>
            </View>
            <View style={styles.checkImageView}>
                <CustomIconButton func={func} source={require("../../assets/icons/delete.png")}/>
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
        width: "20%",
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
    nameExpTextView: {
        width: "60%",
        height: "100%",
        justifyContent: "center",
        marginRight: 20,
    },
    nameText: {
        fontSize: 23,
        color: "black",
        fontWeight: "bold",
        marginBottom: 2,

    },
    expText: {
        fontSize: 20,
        fontStyle: "italic",
        color: "gray",
    },
    checkImageView: {
        flexDirection: "row",
        width: 150,
        padding: 13,
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    checkImage: {
        width: 20,
        height: 20,
    },

});

export default CustomContractList;
