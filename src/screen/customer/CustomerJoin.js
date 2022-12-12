import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
import {RadioButton} from "react-native-radio-buttons-group";

const CustomerJoin = ({navigation, route}) => {



    const [age, setAge] = useState("")
    const [name, setName] = useState("");
    const [SSN, setSSN] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [account, setAccount] = useState("");
    const [historyYear, setHistoryYear] = useState("");


    const [genderValue, setGenderValue] = useState(0);
    const [genderItem, setGenderItem] = useState([
        {label: '남성', value: 0},
        {label: '여성', value: 1}
    ])
    const [genderOpen, setGenderOpen] = useState(false);

    const [diseaseValue, setDiseaseValue] = useState(0);
    const [diseaseItem, setDiseaseItem] = useState([
        {label: '암', value: 1},
        {label: '결핵', value: 2},
        {label: '수두', value: 3},
        {label: '홍역', value: 4},
        {label: '없음', value: 5},
    ])
    const [diseaseOpen, setDiseaseOpen] = useState(false);


    const [jobValue, setJobValue] = useState(0);
    const [jobItem, setJobItem] = useState([
        {label: '영업직', value: 1},
        {label: '생산직', value: 2},
        {label: '사무직', value: 3},
        {label: '자영업자', value: 4},
        {label: '무직', value: 5},
    ])
    const [jobOpen, setJobOpen] = useState(false);

    const cureCompletes = [
        {id: 0, label: "무"},
        {id: 1, label: "유"}
    ]
    const [radioSelect, setRadioSelect] = useState([false, false]);
    const [index, setIndex] = useState(0);

    function select(index) {
        if (index === 0) {
            setRadioSelect([true, false]);
        } else {
            setRadioSelect([false, true]);
        }
        setIndex(index)
    }



    function join() {
        console.log(route)
        if (route.params.type === "C") {
            navigation.navigate("CustomerCarJoin", {
                insuranceId: route.params.insuranceId,
                name: name,
                age: age,
                ssn: SSN,
                email: email,
                phoneNum: phoneNum,
                address: address,
                account: account,
                customerSex: genderValue,
                diseaseNum:diseaseValue,
                historyYear: historyYear,
                cureComplete: index,
                job: jobValue
            });
        } else if (route.params.type === "F") {
            navigation.navigate("CustomerHouseJoin", {
                insuranceId: route.params.insuranceId,
                name: name,
                age: age,
                ssn: SSN,
                email: email,
                phoneNum: phoneNum,
                address: address,
                account: account,
                customerSex: genderValue,
                diseaseNum:diseaseValue,
                historyYear: historyYear,
                cureComplete: index,
                job: jobValue
            });
        } else {
            navigation.navigate("CustomerShipJoin", {
                insuranceId: route.params.insuranceId,
                name: name,
                age: age,
                ssn: SSN,
                email: email,
                phoneNum: phoneNum,
                address: address,
                account: account,
                customerSex: genderValue,
                diseaseNum:diseaseValue,
                historyYear: historyYear,
                cureComplete: index,
                job: jobValue
            });
        }
    }


    return (
        <SafeAreaView style={styles.container}>



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
                <Text style={styles.text}>고객 나이</Text>
                <TextInput
                    onChangeText={text => {
                        setAge(text)
                    }}
                    placeholder={"고객 나이"}
                    keyboardType="number-pad"
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

            <DropDownPicker
                items={jobItem}
                setItems={setJobItem}
                value={jobValue}
                setValue={setJobValue}
                open={jobOpen}
                setOpen={setJobOpen}
                placeholder={"직업"}
                containerStyle={styles.jobSelect}
                style={styles.jobSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />


            <View style={styles.inputView}>
            <Text style={styles.text}>완치 여부</Text>
            <View style={styles.radioButtonView}>
            {cureCompletes.map((cureComplete, index)=>
                <RadioButton id={cureComplete.id}
                             key={cureComplete.id}
                             label={cureComplete.label}
                             onPress={index => select(index)}
                             selected={radioSelect[cureComplete.id]}
                />

            )}
            </View>
            </View>


            <DropDownPicker
                items={diseaseItem}
                setItems={setDiseaseItem}
                value={diseaseValue}
                setValue={setDiseaseValue}
                open={diseaseOpen}
                setOpen={setDiseaseOpen}
                placeholder={"병명"}
                containerStyle={styles.diseaseSelect}
                style={styles.diseaseSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />


            <View style={styles.inputView}>
                <Text style={styles.text}>병력 발병 년도</Text>
                <TextInput
                    onChangeText={text => {
                        setHistoryYear(text)
                    }}
                    placeholder={"병력 발병 년도"}
                    keyboardType={"number-pad"}
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
        zIndex: 4,
    },
    jobSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 3,
    },
    diseaseSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 2,
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
    radioButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    insuranceSelectButton: {
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#f5f6fa"
    },
    insuranceSelectText: {
        fontSize: 22,
    },

});

export default CustomerJoin;
