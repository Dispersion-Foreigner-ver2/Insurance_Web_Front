import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomInformationText from "../../component/CustomInformationText";


const StaffInformation = ({route}) => {
    return (
        <SafeAreaView style={styles.container}>

            <CustomInformationText title={"사원 번호"} content={route.params.id}/>
            <CustomInformationText title={"사원 이름"} content={route.params.name}/>
            <CustomInformationText title={"부서"} content={route.params.department}/>
            <CustomInformationText title={"주민등록번호"} content={route.params.ssn}/>
            <CustomInformationText title={"이메일"} content={route.params.email}/>
            <CustomInformationText title={"전화 번호"} content={route.params.phoneNum}/>
            <CustomInformationText title={"입사 일자"} content={route.params.joinDate}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
});


export default StaffInformation;
