import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";

const CustomCompensationList = ({contractId, insuranceId, insuranceName, type, func}) => {

    //게약 ID | 보험 종류(img) | 보험 이름 | 고객 이름 | 보상하기 버튼

    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{contractId}</Text>
            </View>
            <View style={styles.typeImageView}>
                {type === "C" ?
                    (<Image source={require("../../assets/icons/car.png")} style={styles.typeImage}/>)
                    : (type === "F" ? (
                        <Image source={require("../../assets/icons/fire.png")} style={styles.typeImage}/>
                    ) : (
                        type === "S" ? (
                            <Image source={require("../../assets/icons/ship.png")} style={styles.typeImage}/>
                        ) : (
                            null
                        )))}
            </View>
            <View style={styles.nameExpTextView}>
                <Text style={styles.nameText}>{insuranceId}</Text>
                <Text style={styles.expText}>{insuranceName}</Text>
            </View>
            <View style={styles.buttonView}>
                <CustomIconButton func={func} source={require("../../assets/icons/paid.png")}/>
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
    typeImageView: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    typeImage: {
        width: 30,
        height: 30,
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

export default CustomCompensationList;
