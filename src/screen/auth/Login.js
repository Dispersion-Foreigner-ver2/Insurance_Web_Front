import React, {useContext, useRef, useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton"
import {StaffContext} from "../../context/Staff";
import axios from "axios";



const Login = ({navigation}) => {
    const {staff, dispatch} = useContext(StaffContext);

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const idRef = useRef();
    const pwRef = useRef();


    function login() {
        // const staff = {id, pw}
        // dispatch(staff);

        if (id.trim() === "") {
            Alert.alert("아이디를 입력해 주세요.");
        }else if (pw.trim() === "") {
            Alert.alert("비밀번호를 입력해 주세요.");
        } else {
            axios.post("http://localhost:8080/login",
                null,
                {params: {staffId: id, password: pw}})
                .then(function (resp) {
                    if (resp.data.result.message === null) {
                        alert("로그인 성공");
                        const staffId = resp.data.result.staffId;
                        const name = resp.data.result.staffName;
                        const department = resp.data.result.department;

                        dispatch({staffId, name, department})
                    } else {
                        console.log(resp.data.result);
                        setId("");
                        setPw("");
                    }
                }).catch(function (e){
                    console.log(e)
            })
            ;
        }
    }

    function join() {
        navigation.navigate("Join");
    }


    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.inputView}>
                <Text style={styles.text}>사원 번호</Text>
                <TextInput
                    onChangeText={text=> {setId(text)}}
                    value={id}
                    onSubmitEditing={ () => {
                        setId(id.trim());
                        pwRef.current.focus();
                    }}
                    onBlur={() => {setId(id.trim())}}
                    placeholder={"사원 번호"}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    style={styles.textInput}
                />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.text}>비밀 번호</Text>
                <TextInput
                    ref={pwRef}
                    value={pw}
                    onChangeText={text => {setPw(text)}}
                    placeholder={"비밀 번호"}
                    onSubmitEditing={ () => {
                        login();
                    }}
                    onBlur={() => {setPw(pw.trim())}}
                    returnKeyType="done"
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>
            <CustomButton text={"로그인"} func={login}/>
            <CustomButton text={"회원가입"} func={join} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
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
