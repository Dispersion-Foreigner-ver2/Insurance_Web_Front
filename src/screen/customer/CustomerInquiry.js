import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomInsuranceList from "../../component/CustomInsuranceList";
import CustomCustomerList from "../../component/CustomCustomerList";
import axios from "axios";

const CustomerInquiry = ({navigation}) => {


    useEffect(() => {
        getCustomers();
    },[]);

    const [customers, setCustomers] = useState([]);

    function getCustomers() {
        axios.get("http://localhost:8080/customer/detail")
            .then(function (resp) {
                console.log(resp.data.result);
                if (resp.data.code === 200) {
                    setCustomers([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setCustomers(customers => [...customers, resp.data.result[i]])
                    }
                    console.log(customers)
                } else {
                    Alert.alert("고객 조회 오류", resp.data.message)
                }
            }).catch(function (reason) {
                Alert.alert("네트워크 오류", "네트워크 연결을 확인해 주세요.")
        });
    }

    function movePay() {
        navigation.navigate("CustomerPayManage");
    }

    function edit() {
        const address = Alert.prompt("수정", "수정 하실 주소를 입력해주세요.");
        const phoneNum = Alert.prompt("수정", "수정 하실 핸드폰 번호를 입력해주세요.");
        const email = Alert.prompt("수정", "수정 하실 이메일을 입력해주세요.");
    }

    function remove() {
        Alert.alert("고객 삭제", "고객을 삭제 하시겠습니까?",
            [
                {text: "예"},
                {text: "아니요"},
            ]
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonView}>
                <TouchableOpacity onPressOut={ movePay}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>보험료 납입 받기</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.listView}>
                {customers.map((customer) =>
                    <CustomCustomerList customerId={customer.customerId}
                                        paid={false}
                                        address={customer.address}
                                        email={customer.email}
                                        customerName={customer.customerName}
                                        monthPay={customer.monthPay}
                                        ssn={customer.ssn}
                                        phoneNum={customer.phoneNumber}
                                        key={customer.customerId}
                                        editFunc={edit}
                                        removeFunc={remove}/>
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


export default CustomerInquiry;
