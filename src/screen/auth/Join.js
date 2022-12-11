import React, {useContext, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../../component/CustomButton";
import {StaffContext} from "../../context/Staff";
import axios from "axios";
import CustomTextInput from "../../component/CustomTextInput";


const Join = ({navigation}) => {

    const {staff, dispatch} = useContext(StaffContext);

    function join() {
        axios.post("http://localhost:8080/staffJoin",
            null,
            {
                params: {
                    id: id, pw: pw, name: name, SSN: SSN, eMail: email,
                    phoneNum: phoneNum, department: departmentValue, position: positionValue, gender: genderValue,
                }
            })
            .then(function (resp) {
                if (resp.data.code === 200) {
                    Alert.alert(`가입을 축하합니다 ${name}님 !`,
                        `ID는 ${id} 이며 PW는 ${pw} 입니다.`);

                    const staffId = resp.data.result.staffId;
                    const staffName = resp.data.result.staffName;
                    const department = resp.data.result.department;

                    dispatch({staffId, staffName, department})
                } else {
                    Alert.alert("회원가입 오류", resp.data.message);
                    setId("");
                    setPw("");
                    setName("");
                    setSSN("");
                    setEmail("");
                    setPhoneNum("");
                }
            }).catch(function (reason) {
                Alert.alert("회원가입 오류","가입에 실패하였습니다. 다시 시도해주세요.");
                setId("");
                setPw("");
                setName("");
                setSSN("");
                setEmail("");
                setPhoneNum("");
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

            <CustomTextInput value={id}
                             onchangeText={text => setId(text)}
                             keyboardType={"number-pad"}
                             title={"사원 번호"}
                             />
            <CustomTextInput value={pw}
                             onchangeText={text => setPw(text)}
                             title={"비밀 번호"}
            />
            <CustomTextInput value={name}
                             onchangeText={text => setName(text)}
                             title={"이름"}
            />
            <CustomTextInput value={SSN}
                             onchangeText={text => setSSN(text)}
                             title={"주민 번호"}
            />
            <CustomTextInput value={email}
                             onchangeText={text => setEmail(text)}
                             title={"이메일"}
            />
            <CustomTextInput value={phoneNum}
                             onchangeText={text => setPhoneNum(text)}
                             keyboardType={"number-pad"}
                             title={"전화 번호"}
            />

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


            <CustomButton text={"회원가입"} func={join}/>
        </SafeAreaView>
    );
}

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


});

export default Join;
