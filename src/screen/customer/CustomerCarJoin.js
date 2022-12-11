import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomTextInput from "../../component/CustomTextInput";


const CustomerCarJoin = () => {
    const [carNum, setCarNum] = useState("");
    const [carYear, setCarYear] = useState("");
    const [carDisplacement, setCarDisplacement] = useState("");
    const [carPrice, setCarPrice] = useState("");

    function carJoin() {

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
