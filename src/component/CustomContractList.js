import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";

const CustomContractList = ({contract}) => {

    //게약 ID | 보험 종류(img) | 보험 이름 | 고객 이름 | 보상하기 버튼

    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{contract.id}</Text>
            </View>
            <View style={styles.nameExpTextView}>
                <Text style={styles.nameText}>{contract.insuranceName}</Text>
                <Text style={styles.expText}>{contract.customerName}</Text>
            </View>
            <View style={styles.buttonView}>
                <CustomIconButton source={require("../../assets/icons/paid.png")}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight: "bold",
        marginBottom: 5,

    },
    expText: {
        fontSize: 20,
        fontStyle: "italic",
    },

    buttonView: {
        width: 200,
        alignItems: "flex-end"
    },

});

export default CustomContractList;
