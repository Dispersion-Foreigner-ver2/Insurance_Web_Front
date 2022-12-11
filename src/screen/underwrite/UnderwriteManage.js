import React from "react";
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import CustomUnderwriteList from "../../component/CustomUnderwriteList";


const UnderwriteManage = () => {

    const contracts = [
        {id : 1, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: true},
        {id : 2, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: true},
        {id : 3, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: false},
        {id : 4, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: false},
        {id : 5, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: true},
        {id : 6, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: false},
        {id : 7, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: true},
        {id : 8, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: true},
        {id : 9, insuranceName: "보험 이름", customerName: "고객 이름", underwrite: false},
    ]

    function checkUnderwrite(contractId) {
        Alert.alert("인수 심사",
            "인수 심사가 아직 진행되지 않았습니다. 인수 심사를 진행하시겠습니까?",
            [
                {
                    text: "예",
                    onPress: () => underwrite(contractId)
                },
                {
                    text: "아니요"
                }
            ]
            )
    }

    function underwrite(contractId) {
        //인수심사 진행 - back
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {contracts.map((contract) =>
                    <CustomUnderwriteList
                        contract={contract}
                        key={contract.id}
                        underwrite={() => checkUnderwrite(contract.id)}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

});


export default UnderwriteManage;
