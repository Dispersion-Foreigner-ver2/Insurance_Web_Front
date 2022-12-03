import React, {useContext, useRef, useState} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton"
import {StaffContext} from "../../context/Staff";



const Login = ({navigation}) => {
    const {dispatch} = useContext(StaffContext);

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const idRef = useRef();
    const pwRef = useRef();


    function login() {
        const staff = {id, pw}
        dispatch(staff);

        // if (id.trim() === "") {
        //     Alert.alert("아이디를 입력해 주세요.");
        // }else if (pw.trim() === "") {
        //     Alert.alert("비밀번호를 입력해 주세요.");
        // } else {
        //     axios.post("http://localhost:8080/login",
        //         null,
        //         {params: {staffId: id, password: pw}})
        //         .then(function (resp) {
        //             if (resp.data !== null && resp.data != "") {
        //                 alert("로그인 성공");
        //                 navigation.navigate('Home');
        //             } else {
        //                 alert("로그인 실패\n 아이디나 비밀번호를 확인하세요.");
        //                 setId("");
        //                 setPw("");
        //             }
        //         })
        //     ;
        // }
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
