import React, {useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import axios from "axios";
import CustomButton from "../../component/CustomButton"


const Login = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    function login() {
        if (id.trim() === "") {
            Alert.alert("아이디를 입력해 주세요.");
        }else if (pw.trim() === "") {
            Alert.alert("비밀번호를 입력해 주세요.");
        } else {
            axios.post("http://localhost:8080/login",
                null,
                {params: {staffId: id, password: pw}})
                .then(function (resp) {
                    if (resp.data !== null && resp.data != "") {
                        console.log(resp.data);
                        alert("로그인 성공");
                    } else {
                        alert("로그인 실패\n 아이디나 비밀번호를 확인하세요.");
                        setId("");
                        setPw("");
                    }
                })
            ;
        }
    }


    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.inputView}>
                <Text style={styles.text}>사원 번호</Text>
                <TextInput
                    onChangeText={text=> {setId(text)}}
                    placeholder={"사원 번호"}
                    keyboardType="number-pad"
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>비밀 번호</Text>
                <TextInput
                    onChangeText={text => {setPw(text)}}
                    placeholder={"비밀 번호"}
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>
            <CustomButton text={"로그인"} func={login}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputView: {
        flexDirection:"row",
        marginBottom: 20,

    },
    text: {
        fontSize: 25,
        marginRight: 20,
    },
    textInput: {
        fontSize: 25,
        width: 200,
        borderWidth: 0.3,
        borderColor: "gray"
    },


});



export default Login;
