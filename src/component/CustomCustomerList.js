import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";


const CustomCustomerList = ({monthPay,customerId, customerName, ssn, address, phoneNum, email, editFunc, removeFunc, paid}) => {

    return (
        monthPay ? (
            <View style={styles.trueContainer}>
                <View style={styles.trueIdTextView}>
                    <Text style={styles.trueIdText}>{customerId}</Text>
                </View>
                <View style={styles.trueNameExpTextView}>
                    <Text style={styles.trueNameText}>{customerName}</Text>
                    <Text style={styles.trueExpText}>{ssn}</Text>
                    <Text style={styles.trueExpText}>{address}</Text>
                    <Text style={styles.trueExpText}>{phoneNum}</Text>
                    <Text style={styles.trueExpText}>{email}</Text>
                </View>
                <View style={styles.buttonView}>
                    <CustomIconButton source={require("../../assets/icons/edit.png")} func={editFunc}/>
                    <CustomIconButton source={require("../../assets/icons/remove_person.png")} func={removeFunc}/>
                </View>
            </View>
        ) : (
            <View style={styles.container}>
                <View style={styles.idTextView}>
                    <Text style={styles.idText}>{customerId}</Text>
                </View>
                <View style={styles.nameExpTextView}>
                    <Text style={styles.nameText}>{customerName}</Text>
                    <Text style={styles.expText}>{ssn}</Text>
                    <Text style={styles.expText}>{address}</Text>
                    <Text style={styles.expText}>{phoneNum}</Text>
                    <Text style={styles.expText}>{email}</Text>
                </View>
                {paid === true ? (
                    null
                ) : (
                    <View style={styles.buttonView}>
                        <CustomIconButton source={require("../../assets/icons/edit.png")} func={editFunc}/>
                        <CustomIconButton source={require("../../assets/icons/remove_person.png")} func={removeFunc}/>
                    </View>
                )}


            </View>
        )

    );
};


const styles = StyleSheet.create({
    trueContainer: {
        flex: 1,
        width: "100%",
        height: 100,
        marginBottom: 5,
        borderColor: 'gray',
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#A9EDBB"
    },
    trueIdTextView: {
        padding: 10,
        borderColor: "gray",
        borderRightWidth: 0.3,
        width: 60,
        height: "100%",
        justifyContent: "center",

    },
    trueIdText: {
        fontSize: 20,
        color: "#55C272",
        fontWeight: "bold",
    },
    trueNameExpTextView: {
        padding: 10,
        height: "100%",
        width: 200,
        justifyContent: "center",
    },
    trueNameText: {
        fontSize: 20,
        color: "#55C272",
        fontWeight: "bold",

    },
    trueExpText: {
        fontSize: 13,
        fontStyle: "italic",
        color: "#FBFFFC",
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        backgroundColor: "#FFBBBB",
        width: "100%",
        height: 100,
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
        width: 60,
        height: "100%",
        justifyContent: "center",

    },
    idText: {
        fontSize: 20,
        color: "#FF7575",
        fontWeight: "bold",
    },
    nameExpTextView: {
        padding: 10,
        width: 200,
        height: "100%",
        justifyContent: "center",
    },
    nameText: {
        fontSize: 20,
        color: "#FF7575",
        fontWeight: "bold",
        marginBottom: 5,

    },
    expText: {
        fontSize: 13,
        fontStyle: "italic",
        color: "#FFFEFE",
        fontWeight: "bold",
    },

    buttonView: {
        width: 90,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
});

export default CustomCustomerList;
