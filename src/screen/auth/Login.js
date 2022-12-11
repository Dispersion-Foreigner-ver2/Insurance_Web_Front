import React, {useContext, useRef, useState} from "react";
import {Alert, SafeAreaView, StyleSheet, View} from "react-native";
import CustomButton from "../../component/CustomButton"
import {StaffContext} from "../../context/Staff";
import axios from "axios";
import CustomTextInput from "../../component/CustomTextInput";


const Login = ({}) => {
    const {dispatch} = useContext(StaffContext);

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
                    if (resp.data.code === 200) {
                        const staffId = resp.data.result.staffId;
                        const staffName = resp.data.result.staffName;
                        const department = resp.data.result.department;

                        dispatch({staffId, staffName, department})

                    } else {
                        Alert.alert("로그인 오류",resp.data.message);

                    }
                }).catch(function (e){
                    alert("네트워크 연결을 확인해주세요.")
            })
            ;
        }
    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.inputView}>
                <CustomTextInput title={"사원 번호"}
                                 value={id}
                                 keyboardType={"number-pad"}
                                 onchangeText={text => setId(text)}
                />

                <CustomTextInput title={"비밀 번호"}
                                 value={pw}
                                 onchangeText={text => setPw(text)}
                                 pw={true}
                />
            </View>
            <CustomButton text={"로그인"} func={login}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    inputView: {
        width: "100%",
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        marginRight: 20,
        color: "white"
    },
    textInput: {
        fontSize: 25,
        width: 200,
        borderWidth: 0.3,
        borderColor: "gray"
    },
});



export default Login;
