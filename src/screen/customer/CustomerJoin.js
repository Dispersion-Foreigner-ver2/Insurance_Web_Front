import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import axios from "axios";

const CustomerJoin = () => {


    function join() {
        axios.post("http://localhost:8080/customerJoin",
            null,
            {params: {customerId: id, customerName: name, customerSsn: SSN, customerEmail:email,
                    customerPhoneNum:phoneNum, customerAddress:address, customerAccount:account
                }})
            .then(function (resp) {
                console.log(resp.data);
            });
    }


    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [SSN, setSSN] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [account, setAccount] = useState("");


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.inputView}>
                <Text style={styles.text}>고객 Id</Text>
                <TextInput
                    onChangeText={text => {
                        setId(text)
                    }}
                    placeholder={"고객 ID"}
                    keyboardType="number-pad"
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>이름</Text>
                <TextInput
                    onChangeText={text => {
                        setName(text)
                    }}
                    placeholder={"이름"}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>주민 번호</Text>
                <TextInput
                    onChangeText={text => {
                        setSSN(text)
                    }}
                    placeholder={"주민 번호"}
                    textContentType={"telephoneNumber"}
                    keyboardType={"number-pad"}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>이메일</Text>
                <TextInput
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    placeholder={"이메일"}
                    keyboardType={"email-address"}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>전화 번호</Text>
                <TextInput
                    onChangeText={text => {
                        setPhoneNum(text)
                    }}
                    placeholder={"전화 번호"}
                    keyboardType="number-pad"
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>고객 주소</Text>
                <TextInput
                    onChangeText={text => {
                        setAddress(text)
                    }}
                    placeholder={"고객 주소"}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>고객 계좌</Text>
                <TextInput
                    onChangeText={text => {
                        setAccount(text)
                    }}
                    placeholder={"고객 계좌 번호"}
                    style={styles.textInput}
                />
            </View>

            <CustomButton text={"회원가입"} func={join}/>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    },
    departmentSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 10,
    },
    positionSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 5,
    },
    genderSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 3,
    },

    inputView: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginBottom: 20,

    },
    text: {
        fontSize: 25,
        marginRight: 20,
    },
    textInput: {
        fontSize: 25,
        width: 250,
        borderWidth: 0.3,
        borderColor: "gray"
    },

});

export default CustomerJoin;
