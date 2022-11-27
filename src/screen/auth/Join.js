import React, {useEffect, useState} from "react";
import {SafeAreaView, Text, TextInput, StyleSheet, View, TouchableOpacity, Alert} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import axios from "axios";
import CustomButton from "../component/CustomButton";

const Join = () => {


    function join() {
        axios.post("http://localhost:8080/staffJoin",
            null,
            {params: {id: id, pw: pw, name: name, SSN: SSN, eMail:email,
                    phoneNum:phoneNum, department:departmentValue, position:positionValue, gender: genderValue,
                }})
            .then(function (resp) {
                console.log(resp.data);
            });
    }

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [SSN, setSSN] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");


    const [departmentValue, setDepartmentValue] = useState(0);
    const [departmentIem, setDepartmentItem] = useState([
        {label: '보험 설계부', value: 0},
        {label: '인수 심사부', value: 1},
        {label: '영업 관리부', value: 2},
        {label: '인사 관리부', value: 3},
        {label: '보상 운영부', value: 4},

    ]);
    const [departmentOpen, setDepartmentOpen] = useState(false);

    const [positionValue, setPositionValue] = useState(0);
    const [positionItem, setPositionItem] = useState([
        {label: '평사원', value: 0},
        {label: '주임', value: 1},
        {label: '대리', value: 2},
        {label: '과장', value: 3},
        {label: '차장', value: 4},
        {label: '부장', value: 5},
    ]);

    const [genderValue, setGenderValue] = useState(true);
    const [genderItem, setGenderItem] = useState([
        {label: '남성', value: true},
        {label: '여성', value: false}
    ])
    const [positionOpen, setPositionOpen] = useState(false);


    const [genderOpen, setGenderOpen] = useState(false);



    return (
        <SafeAreaView style={styles.container}>

            <DropDownPicker
                items={departmentIem}
                setItems={setDepartmentItem}
                value={departmentValue}
                setValue={setDepartmentValue}
                open={departmentOpen}
                setOpen={setDepartmentOpen}
                placeholder={"부서"}
                containerStyle={styles.departmentSelect}
                style={styles.departmentSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />


            <DropDownPicker
                items={positionItem}
                setItems={setPositionItem}
                value={positionValue}
                setValue={setPositionValue}
                open={positionOpen}
                setOpen={setPositionOpen}
                placeholder={"직급"}
                containerStyle={styles.positionSelect}
                style={styles.positionSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />

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

            <View style={styles.inputView}>
            <Text style={styles.text}>이름</Text>
            <TextInput
                onChangeText={text => {setName(text)}}
                placeholder={"이름"}
                style={styles.textInput}
            />
            </View>

            <View style={styles.inputView}>
            <Text style={styles.text}>주민 번호</Text>
            <TextInput
                onChangeText={text => {setSSN(text)}}
                placeholder={"주민 번호"}
                textContentType={"telephoneNumber"}
                keyboardType={"number-pad"}
                style={styles.textInput}
            />
            </View>

            <View style={styles.inputView}>
            <Text style={styles.text}>이메일</Text>
            <TextInput
                onChangeText={text => {setEmail(text)}}
                placeholder={"이메일"}
                keyboardType={"email-address"}
                style={styles.textInput}
            />
            </View>

            <View style={styles.inputView}>
            <Text style={styles.text}>전화 번호</Text>
            <TextInput
                onChangeText={text => {setPhoneNum(text)}}
                placeholder={"전화 번호"}
                keyboardType="number-pad"
                style={styles.textInput}
            />
            </View>

            <DropDownPicker
                items={genderItem}
                setItems={setGenderItem}
                value={genderValue}
                setValue={setGenderValue}
                open={genderOpen}
                setOpen={setGenderOpen}
                placeholder={"성별"}
                containerStyle={styles.genderSelect}
                style={styles.genderSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                />


            <CustomButton text={"회원가입"} func={join} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "flex-start",
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

export default Join;
