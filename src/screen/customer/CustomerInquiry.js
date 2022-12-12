import React from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomInsuranceList from "../../component/CustomInsuranceList";
import CustomCustomerList from "../../component/CustomCustomerList";

const CustomerInquiry = ({navigation}) => {

    const customers = [
        {id: 1, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: true},
        {id: 2, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: true},
        {id: 3, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: true},
        {id: 4, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: false},
        {id: 5, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: true},
        {id: 6, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: false},
        {id: 7, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: true},
        {id: 8, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: false},
        {id: 9, name : "차유상", ssn: "123123-123123", address:"인천시 남동구 서창남순환로 82 104-1301", phoneNum: "010-1234-1234", email: "yoo7969@naver.com", paid: false},
    ]

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
                    <CustomCustomerList customer={customer}
                                        key={customer.id}
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
