import React from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomStaffList from "../../component/CustomStaffList";


const StaffManage = ({navigation}) => {

    const staffs = [
        {id : 1, department: "인사 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 2, department: "인수 심사부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 3, department: "인사 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 4, department: "영업 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 5, department: "인수 심사부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 6, department: "인사 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 7, department: "영업 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 8, department: "영업 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 9, department: "영업 관리부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 10, department: "보험 설계부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 11, department: "보험 설계부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 12, department: "보상 운영부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 13, department: "인수 심사부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},
        {id : 14, department: "보상 운영부", name: "차유상", date:"2002-12-12", ssn: "123123-123123", email: "yoo7969@naver.com", phone: "010-123-123"},

    ];

    function moveStaffInformation(staff) {
        navigation.navigate("StaffInformation", {id: staff.id, department: staff.department, name:staff.name, date: staff.date, ssn:staff.ssn, email: staff.email,
            phone: staff.phone});
        // navigation.navigate("StaffInformation");
    }

    function moveStaffPayManage() {
        navigation.navigate("StaffPayManage");
    }

    function move(staff) {
        if (staff.department === "인사 관리부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '보험 설계부'
                    },
                    {
                        text: '인수 심사부'
                    },
                    {
                        text: '영업 관리부'
                    },
                    {
                        text: '보상 운영부'
                    },

                ]
            );
        }else if (staff.department === "보험 설계부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부'
                    },
                    {
                        text: '인수 심사부'
                    },
                    {
                        text: '영업 관리부'
                    },
                    {
                        text: '보상 운영부'
                    },

                ]
            );
        }else if (staff.department === "인수 심사부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부'
                    },
                    {
                        text: '보험 설계부'
                    },
                    {
                        text: '영업 관리부'
                    },
                    {
                        text: '보상 운영부'
                    },

                ]
            );
        }else if (staff.department === "영업 관리부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부'
                    },
                    {
                        text: '인수 심사부'
                    },
                    {
                        text: '보험 설계부'
                    },
                    {
                        text: '보상 운영부'
                    },

                ]
            );
        }else if (staff.department === "보상 운영부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부'
                    },
                    {
                        text: '인수 심사부'
                    },
                    {
                        text: '영업 관리부'
                    },
                    {
                        text: '보험 설계부'
                    },

                ]
            );
        }
    }

    function remove(staff) {

    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.listView}>
                {staffs.map((staff) =>
                    <CustomStaffList key={staff.id}
                                     staff={staff}
                                     search={()=>moveStaffInformation(staff)}
                                     pay={()=>moveStaffPayManage()}
                                     move={() => move(staff)}
                                     // remove={() => remove(staff)}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        backgroundColor: "white"

    },
    buttonView: {
        height: 50,
        width: "100%",
        alignItems: "flex-end",

    },
    buttonView2: {
        height: 30,
        width: "100%",
        alignItems: "flex-end",
    },
    button: {
        height: 40,
        marginTop: 3,
        marginRight: 3,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#55efc4",
    },
    buttonText: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
    },
    buttonText2: {
        fontSize: 20,
        fontStyle: "italic",
        color: "blue",
    },
    listView: {
        flex: 1,
        marginTop: 5,

    },
    animationView: {
        width: "100%",
        height: "80%",
        zIndex: -20,
    },


});

export default StaffManage;
