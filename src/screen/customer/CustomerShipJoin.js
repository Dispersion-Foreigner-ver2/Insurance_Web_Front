import React, {useState} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";
import CustomerHouseJoin from "./CustomerHouseJoin";


const CustomerShipJoin = () => {
    const [shipTypeValue, setShipTypeValue] = useState(0);
    const [shipTypeIem, setHouseTypeItem] = useState([
        {label: '일반', value: 1},
        {label: '화물선', value: 2},
        {label: '오피스텔', value: 3},
    ]);
    const [shipTypeOpen, setShipTypeOpen] = useState(false);


    const [shipNum, setShipNum] = useState("");
    const [shipYear, setShipYear] = useState("");
    const [shipPrice, setShipPrice] = useState("");

    function shipJoin() {

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
