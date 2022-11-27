import React, {useEffect, useState} from "react";
import {ImageBackground, SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import CustomMainButton from "../component/CustomMainButton";



const Main = () => {

    const [staffId, setStaffId] = useState();
    const [staffName, setStaffName] = useState();
    const [department, setDepartment] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.staffText}>{staffId}, {department}, {staffName}님 환영합니다~!</Text>
                <Text style={styles.helloText}>오늘도 아좌좌~~!</Text>
            </View>

            {
                department === "Design" ? (
                    <View style={styles.buttonView}>
                        <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                        <CustomMainButton buttonText="보험 관리" />
                    </View>

                ) : (
                    department === "Underwriting" ? (
                        <View style={styles.buttonView}>
                            <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                            <CustomMainButton buttonText={"인수 심사 관리"}/>
                        </View>
                    ) : (
                        department === "Sales" ? (
                            <View style={styles.buttonView}>
                                <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                                <CustomMainButton buttonText={"고객 관리"}/>
                                <CustomMainButton buttonText={"보험 계약 관리"}/>
                            </View>
                        ) : (
                            department === "Human" ? (
                                <View style={styles.buttonView}>
                                    <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                                    <CustomMainButton buttonText={"인사 관리"}/>
                                </View>
                            ) : (
                                <View style={styles.buttonView}>
                                    <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                                    <CustomMainButton buttonText={"보상 운영"}/>
                                </View>
                            )
                        )
                    )
                )
            }
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
    },
    textView: {
        width: "90%",
        // margin: "7%",
    },
    staffText: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "black",
        marginBottom: 10,
    },
    helloText: {
        fontSize: 20,
        fontStyle: "italic",
        color: "gray",
    },
    doText: {
        fontSize: 22,
        fontStyle: "italic",
        color: "black",
        marginBottom: 10,
    },
    buttonView: {
        width: "90%",
        margin: "7%",
        marginTop: 50,

    },







});


export default Main;
