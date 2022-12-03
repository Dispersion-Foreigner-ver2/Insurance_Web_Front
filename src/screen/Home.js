import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomMainButton from "../component/CustomMainButton";
import {StaffContext} from "../context/Staff";


const Home = ({navigation}) => {

    const {staff, dispatch} = useContext(StaffContext);


    const [staffId, setStaffId] = useState();
    const [staffName, setStaffName] = useState();
    const [department, setDepartment] = useState("Human");

    function moveInsurance() {
        navigation.navigate("InsuranceManage");
    }

    function moveStaff() {
        navigation.navigate("StaffManage");
    }

    function moveCustomer() {
        navigation.navigate("CustomerManage");
    }

    function moveContract() {

    }

    function logout(){
        dispatch("", "", "");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.staffText}>{staff.staffId}, {staff.department}, {staff.staffName} 님 {`\n`}환영합니다~!</Text>
                <Text style={styles.helloText}>오늘도 아좌좌~~!</Text>
            </View>

            {
                staff.department === "보험 설계부" ? (
                    <View style={styles.buttonView}>
                        <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                        <CustomMainButton buttonText="보험 관리" func={moveInsurance} />
                    </View>

                ) : (
                    staff.department === "인수 심사부" ? (
                        <View style={styles.buttonView}>
                            <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                            <CustomMainButton buttonText={"인수 심사 관리"}/>
                        </View>
                    ) : (
                        staff.department === "영업 관리부" ? (
                            <View style={styles.buttonView}>
                                <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                                <CustomMainButton buttonText={"고객 관리"} func={moveCustomer}/>
                                <CustomMainButton buttonText={"보험 계약 관리"} func={moveContract}/>
                            </View>
                        ) : (
                            staff.department === "인사 관리부" ? (
                                <View style={styles.buttonView}>
                                    <Text style={styles.doText}>저와 함께 일을 시작해볼까요?</Text>
                                    <CustomMainButton buttonText={"인사 관리"} func={moveStaff}/>
                                    <CustomMainButton buttonText={"로그 아웃"} func={logout}/>
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
        backgroundColor: "white"
    },
    textView: {
        width: "90%",
        margin: "7%",
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
        margin: 15,
        marginTop: 50,

    },







});


export default Home;
