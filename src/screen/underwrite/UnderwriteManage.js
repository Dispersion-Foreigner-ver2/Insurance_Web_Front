import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
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



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {contracts.map((contract) =>
                    <CustomUnderwriteList contract={contract} key={contract.id}/>
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
