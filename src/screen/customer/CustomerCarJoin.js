import React, {useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomTextInput from "../../component/CustomTextInput";
import axios from "axios";


const CustomerCarJoin = ({navigation, route}) => {
    const [carNum, setCarNum] = useState("");
    const [carYear, setCarYear] = useState("");
    const [carDisplacement, setCarDisplacement] = useState("");
    const [carPrice, setCarPrice] = useState("");

    function carJoin() {
        axios.post("http://localhost:8080/contract/conclusion/car",
            null, {
                params: {
                    insuranceId: route.params.insuranceId,
                    name: route.params.name,
                    age: route.params.age,
                    ssn: route.params.ssn,
                    email: route.params.email,
                    job: route.params.job,
                    phoneNum: route.params.phoneNum,
                    address: route.params.address,
                    account: route.params.account,
                    customerSex: route.params.customerSex,
                    diseaseNum: route.params.diseaseNum,
                    historyYear: route.params.historyYear,
                    cureComplete: route.params.cureComplete,
                    carNum: carNum,
                    displacement: carDisplacement,
                    price: carPrice,
                    year: carYear
                }
            }).then(function (resp) {
            if (resp.data.code === 200) {
                Alert.alert("계약 작성 완료", resp.data.result.message);
                navigation.navigate("ContractManage")
            } else {
                Alert.alert("계약 작성 실패", resp.data.message);
            }
        }).catch(function (reason) {
            Alert.alert("네트워크 오류", "네트워크 연결을 확인하세요.")
        });
    }

    return (
        <SafeAreaView style={styles.container}>

            <CustomTextInput title={"자동차 번호"}
                             placeholder={"자동차 번호"}
                             value={carNum}
                             onchangeText={setCarNum}
                             />
            <CustomTextInput title={"자동차 연식"}
                             placeholder={"자동차 연식"}
                             value={carYear}
                             keyboardType={"number-pad"}
                             onchangeText={setCarYear}
            />
            <CustomTextInput title={"자동차 배기량"}
                             placeholder={"자동차 배기량"}
                             value={carDisplacement}
                             keyboardType={"number-pad"}
                             onchangeText={setCarDisplacement}
            />
            <CustomTextInput title={"자동차 가격"}
                             placeholder={"자동차 가격"}
                             value={carPrice}
                             keyboardType={"number-pad"}
                             onchangeText={setCarPrice}
            />

            <CustomButton text={"입력"} func={carJoin}/>

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
});


export default CustomerCarJoin;
