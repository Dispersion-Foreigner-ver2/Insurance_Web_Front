import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import CustomIconButton from "./CustomIconButton";


const CustomInsuranceList = () => {

    const [id, setId] = useState("123");
    const [type, setType] = useState("fire");
    const [name, setName] = useState("화재 보험");
    const [exp, setExp] = useState("화재 보험 설명...");
    const [authorize, setAuthorize] = useState(false);


    const [typeIcon, setTypeIcon] = useState("");

    useEffect(() => {
        switch (type) {
            case "fire":
                setTypeIcon("../../assets/icons/fire.png");
            case "car" :
                setTypeIcon("../../assets/icons/car.png");
            case "ship" :
                setTypeIcon("../../assets/icons/ship.png");
        }


    },[]);


    return (
        <View style={styles.container}>
            <View style={styles.idTextView}>
                <Text style={styles.idText}>{id}</Text>
            </View>
            <View style={styles.typeImageView}>
                <Image source={require("../../assets/icons/fire.png")} style={styles.typeImage}/>
            </View>
            <View style={styles.nameExpTextView}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.expText}>{exp}</Text>
            </View>
            {authorize === false && <CustomIconButton source={require("../../assets/icons/edit.png")}/> }
            <CustomIconButton source={require("../../assets/icons/delete.png")}/>
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






});


export default CustomInsuranceList;
