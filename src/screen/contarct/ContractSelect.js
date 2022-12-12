import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RadioButton} from "react-native-radio-buttons-group";
import axios from "axios";


const ContractSelect = ({navigation}) => {

    const [insurances, setInsurances] = useState([]);

    const [selectValues, setSelectValues] = useState([]);

    const [insuranceId, setInsuranceId] = useState(null);

    useEffect(() => {
        getInsuranceList();
    }, []);

    function getInsuranceList() {
        axios.get("http://localhost:8080/insurance/all")
            .then(function (resp) {
                if (resp.data.code === 200) {
                    setInsurances([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setInsurances(insurances => [...insurances, resp.data.result[i]]);
                        setSelectValues(selectValues => [...selectValues, false]);
                    }
                } else {
                    Alert.alert("보험 조회 오류", resp.data.message)
                }

            });
    }

    function select(id, index) {
        setInsuranceId(index);

        setSelectValues([]);
        for (let i = 0; i < selectValues.length; i++) {
            if (i == index) {
                setSelectValues(selectValues => [...selectValues, true]);
            } else {
                setSelectValues(selectValues => [...selectValues, false]);
            }
        }
    }

    function completeSelect() {
        if (insuranceId === null) {
            alert("보험을 선택해주세요.");
        } else {
            Alert.alert("이미 가입하신 고객인가요 ?", "",
                [
                    {
                        text: "예",
                        onPress:  checkCustomer,
                    },
                    {
                        text: "아니요",
                        onPress:  createCustomer,
                    },
                    {text: "돌아가기"},
                ]);
        }
    }

    function checkCustomer() {

    }

    function createCustomer() {
        navigation.navigate("CustomerJoin", {insuranceId: insurances[insuranceId].insurance.id, type : insurances[insuranceId].insuranceType})
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.mainText}>계약 할 보험을 선택해주세요.</Text>
                <ScrollView style={styles.scrollView}>
                    {insurances.map((insurance, index) =>
                        insurance.insurance.authorization === true ? (
                            insurance.insuranceType === "C" ? (
                                <RadioButton id={insurance.insurance.id}
                                             key={insurance.insurance.id}
                                             label={`[자동차 보험] ${insurance.insurance.name}`}
                                             onPress={id => select(id,index)}
                                             containerStyle={styles.insuranceSelectButton}
                                             labelStyle={styles.insuranceSelectText}
                                             selected={selectValues[index]}
                                />
                            ) : (
                                insurance.insuranceType === "F" ? (
                                    <RadioButton id={insurance.insurance.id}
                                                 key={insurance.insurance.id}
                                                 label={`[화재 보험] ${insurance.insurance.name}`}
                                                 onPress={id => select(id,index)}
                                                 containerStyle={styles.insuranceSelectButton}
                                                 labelStyle={styles.insuranceSelectText}
                                                 selected={selectValues[index]}
                                    />
                                ) : (
                                    <RadioButton id={insurance.insurance.id}
                                                 key={insurance.insurance.id}
                                                 label={`[해상 보험] ${insurance.insurance.name}`}
                                                 onPress={id => select(id,index)}
                                                 containerStyle={styles.insuranceSelectButton}
                                                 labelStyle={styles.insuranceSelectText}
                                                 selected={selectValues[index]}
                                    />
                                )
                            )
                        ) : (null))}
                </ScrollView>
                <View style={styles.contractButtonContainer}>
                    <TouchableOpacity onPress={completeSelect}>
                        <View style={styles.contractButtonView}>
                            <Text style={styles.contractButtonText}>선택 완료</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mainText: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "black",
        marginBottom: 10,
    },
    scrollView: {
        height: "84.7%",
    },
    insuranceSelectButton: {
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#f5f6fa"
    },
    insuranceSelectText: {
        fontSize: 22,
    },


    contractButtonContainer: {
        height: "4%",
        alignItems: "center",
        zIndex: 50,
        borderTopWidth: 0.2,
    },
    contractButtonView: {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: "skyblue",
        height: 60,
        width: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    contractButtonText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
    },



});


export default ContractSelect;
