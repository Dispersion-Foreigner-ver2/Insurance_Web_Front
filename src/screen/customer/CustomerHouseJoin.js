import React, {useState} from "react";
import {Alert, SafeAreaView, StyleSheet} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import DropDownPicker from "react-native-dropdown-picker";
import CustomerCarJoin from "./CustomerCarJoin";
import axios from "axios";


const CustomerHouseJoin = ({navigation, route}) => {

    const [houseTypeValue, setHouseTypeValue] = useState(0);
    const [houseTypeIem, setHouseTypeItem] = useState([
        {label: '아파트', value: 1},
        {label: '단독 주택', value: 2},
        {label: '오피스텔', value: 3},
    ]);
    const [houseTypeOpen, setHouseTypeOpen] = useState(false);


    const [housePrice, setHousePrice] = useState("");

    function houseJoin() {
        axios.post("http://localhost:8080/contract/conclusion/fire",
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
                    houseType: houseTypeValue,
                    housePrice: housePrice
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

            <DropDownPicker
                items={houseTypeIem}
                setItems={setHouseTypeItem}
                value={houseTypeValue}
                setValue={setHouseTypeValue}
                open={houseTypeOpen}
                setOpen={setHouseTypeOpen}
                placeholder={"건물 종류"}
                containerStyle={styles.houseTypeSelect}
                style={styles.houseTypeSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />

            <CustomTextInput title={"건물 가격"}
                             placeholder={"건물 가격"}
                             value={housePrice}
                             keyboardType={"number-pad"}
                             onchangeText={setHousePrice}
            />

            <CustomButton text={"입력"} func={houseJoin}/>

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
    houseTypeSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 10,
    },
});

export default CustomerHouseJoin;
