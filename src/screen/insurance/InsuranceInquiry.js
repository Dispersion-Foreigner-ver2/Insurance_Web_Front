import React, {useState} from "react";
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomIconButton from "../../component/CustomIconButton";
import CustomInsuranceList from "../../component/CustomInsuranceList";

const InsuranceInquiry = () => {

    const [insurance, setInsurance] = useState([]);
    const [insuranceId, setInsuranceId] = useState(0);

    function createInsurance(){
        Alert.alert(
            "무슨 보험을 만드실건가요?",
            "보험을 선택해주세요.",
            [
                {
                    text: "화재 보험",
                },
                {
                    text: "자동차 보험",
                },
                {
                    text: "해상 보험",
                },
            ]
        )
    }

    // const insuranceList = {
    //     insuranceType,
    //     insuranceName,
    //     insuranceExp,
    //     insuranceAuthorize,
    //     id: {insuranceId}
    // }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonView}>
                <TouchableOpacity onPressOut={createInsurance}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>새로 만들기</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.listView}>
                <CustomInsuranceList/>
                <CustomInsuranceList/>
                <CustomInsuranceList/>
                <CustomInsuranceList/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonView: {
        height: 50,
        width: "100%",
        alignItems: "flex-end",
    },
    button: {
        height: 40,
        marginTop: 3,
        marginRight: 3,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#55efc4",
    },
    buttonText: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
    },
    listView: {
        flex: 1,
        marginTop: 5,

    },

});


export default InsuranceInquiry;
