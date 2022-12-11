import React, {useState} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import DropDownPicker from "react-native-dropdown-picker";
import CustomerCarJoin from "./CustomerCarJoin";


const CustomerHouseJoin = () => {

    const [houseTypeValue, setHouseTypeValue] = useState(0);
    const [houseTypeIem, setHouseTypeItem] = useState([
        {label: '아파트', value: 1},
        {label: '단독 주택', value: 2},
        {label: '오피스텔', value: 3},
    ]);
    const [houseTypeOpen, setHouseTypeOpen] = useState(false);


    const [carNum, setCarNum] = useState("");
    const [carYear, setCarYear] = useState("");
    const [carDisplacement, setCarDisplacement] = useState("");
    const [housePrice, setHousePrice] = useState("");

    function houseJoin() {

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
