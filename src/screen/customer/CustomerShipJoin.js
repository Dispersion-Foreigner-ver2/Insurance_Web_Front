import React, {useState} from "react";
import {Alert, SafeAreaView, StyleSheet} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import axios from "axios";


const CustomerShipJoin = ({navigation, route}) => {
    const [shipTypeValue, setShipTypeValue] = useState(0);
    const [shipTypeIem, setHouseTypeItem] = useState([
        {label: '일반', value: 1},
        {label: '화물선', value: 2},
    ]);
    const [shipTypeOpen, setShipTypeOpen] = useState(false);


    const [shipNum, setShipNum] = useState("");
    const [shipYear, setShipYear] = useState("");
    const [shipPrice, setShipPrice] = useState("");

    function shipJoin() {
        axios.post("http://localhost:8080/contract/conclusion/sea",
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
                    shipType: shipTypeValue,
                    shipNum: shipNum,
                    price: shipPrice,
                    year: shipYear
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
                items={shipTypeIem}
                setItems={setHouseTypeItem}
                value={shipTypeValue}
                setValue={setShipTypeValue}
                open={shipTypeOpen}
                setOpen={setShipTypeOpen}
                placeholder={"선박 종류"}
                류           containerStyle={styles.shipTypeSelect}
                style={styles.shipTypeSelect}
                dropDownStyle={{backgroundColor: '#fafafa'}}
            />

            <CustomTextInput title={"선박 번호"}
                             placeholder={"선박 번호"}
                             value={shipNum}
                             onchangeText={setShipNum}
            />
            <CustomTextInput title={"선박 연식"}
                             placeholder={"선박 연식"}
                             value={shipYear}
                             keyboardType={"number-pad"}
                             onchangeText={setShipYear}
            />

            <CustomTextInput title={"선박 가격"}
                             placeholder={"선박 가격"}
                             value={shipPrice}
                             keyboardType={"number-pad"}
                             onchangeText={setShipPrice}
            />
            <CustomButton text={"입력"} func={shipJoin}/>

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
    shipTypeSelect: {
        backgroundColor: "white",
        marginBottom: 10,
        zIndex: 10,
    },
});


export default CustomerShipJoin;
