import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomInsuranceList from "../../component/CustomInsuranceList";
import axios from "axios";

const InsuranceInquiry = ({navigation, route}) => {

    const [insurances, setInsurances] = useState([]);

    useEffect(() => {
        getInsurance()
    },[]);

    useEffect(() => {
        getInsurance()
        route.change = false;
    },[route]);



    function getInsurance() {
        axios.get("http://localhost:8080/insurance/all")
            .then(function (resp) {
                if (resp.data.code === 200) {
                    setInsurances([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setInsurances(insurances => [...insurances, resp.data.result[i]]);
                    }
                } else {
                    Alert.alert("보험 불러오기 오류", resp.data.message)
                }

            });
    }

    function createInsurance(){
        Alert.alert(
            "무슨 보험을 만드실건가요?",
            "보험을 선택해주세요.",
            [
                {
                    text: "화재 보험",
                    onPress: moveFire,
                },
                {
                    text: "자동차 보험",
                    onPress: moveCar,
                },
                {
                    text: "해상 보험",
                    onPress: moveSea,
                },
            ]
        )
    }

    function moveFire() {
        navigation.navigate("FireInsuranceCreate");
    }

    function moveCar() {
        navigation.navigate("CarInsuranceCreate")
    }

    function moveSea() {
        navigation.navigate("SeaInsuranceCreate")
    }


    function checkAuthorize(insurance) {
        Alert.alert(
            "해당 보험을 인가 받을까요?",
            null,
            [
                {
                    text: "예",
                    onPress: () =>  authorize(insurance)
                },
                {
                    text: "아니요",
                },
            ]
        )
    }


    function authorize(insurance) {

        axios.post("http://localhost:8080/insurance/auth",
            null, {
                params: {id: insurance.insurance.id}
            })
            .then(function (resp) {
                if (resp.data.code === 200) {
                    Alert.alert(
                        "보험 인가 성공",
                        resp.data.result.message
                    );
                    getInsurance();
                } else {
                    Alert.alert("보험 인가 오류", resp.data.message)
                }
            }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }

    function checkDeleteInsurance(insurance)
    {
        Alert.alert(
            "해당 보험을 삭제할까요?",
            null,
            [
                {
                    text: "예",
                    onPress: () =>  deleteInsurance(insurance)
                },
                {
                    text: "아니요",
                },
            ]
        )
    }

    function deleteInsurance(insurance) {
        axios.delete("http://localhost:8080/insurance/delete", {
            params: {id: insurance.insurance.id}
        }).then(function (resp) {
            if (resp.data.code === 200) {
                Alert.alert("보험 삭제 성공", resp.data.result.message);
                getInsurance();
            } else {
                Alert.alert("보험 삭제 오류", resp.data.message);
            }
        }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }


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
                {insurances.map((insurance) =>
                    <CustomInsuranceList key={insurance.insurance.id} insuranceInformation={insurance} authorizeInsurance={() => checkAuthorize(insurance)} deleteInsurance={() => checkDeleteInsurance(insurance)}/>
                )}

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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
