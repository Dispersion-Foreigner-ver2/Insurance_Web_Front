import React from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import CustomCustomerList from "../../component/CustomCustomerList";
import CustomMainButton from "../../component/CustomMainButton";


const CustomerPayManage = () => {

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.listView}>
                {customers.map((customer) =>
                    <CustomCustomerList customer={customer}/>
                )}
            </ScrollView>
            <CustomMainButton buttonText={"청구서 보내기"} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    listView: {
        flex: 1,
        marginTop: 5,

    },

});

export default CustomerPayManage;
