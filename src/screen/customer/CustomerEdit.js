import React from "react";
import {SafeAreaView} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";


const CustomerEdit = ({customer}) => {
    return (
        <SafeAreaView>
            <CustomTextInput title={"주소"} value={customer.address}/>
            <CustomTextInput title={"전화 번호"} value={customer.phoneNum}/>
            <CustomTextInput title={"이메일"} value={customer.email}/>
        </SafeAreaView>
    );
};
