import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomStaffList from "../../component/CustomStaffList";
import axios from "axios";


const StaffManage = ({navigation}) => {

    const [staffs, setStaffs] = useState([]);



    useEffect(() => {
      getStaff()
    }, []);

    function getStaff() {
        axios.get("http://localhost:8080/staff")
            .then(function (resp){
                if (resp.data.code === 200) {
                    setStaffs([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setStaffs(staffs => [...staffs, resp.data.result[i]]);
                    }
                } else {
                    Alert.alert("회원 정보 불러오기 오류", resp.data.message)
                }
            })
    }

    function moveStaffInformation(staff) {
        axios.get("http://localhost:8080/staff/detail", {
                params:{
                    id: staff.id
                }
            })
            .then(function (resp){
                if (resp.data.code === 200) {
                    navigation.navigate("StaffInformation", {
                        id: resp.data.result.id,
                        department: resp.data.result.department,
                        name: resp.data.result.name,
                        joinDate: resp.data.result.joinDate,
                        ssn: resp.data.result.ssn,
                        email: resp.data.result.email,
                        phoneNum: resp.data.result.phoneNum
                    });
                } else {
                    Alert.alert("회원 정보 불러오기 오류", resp.data.message)
                }

            })

    }

    function moveStaffPayManage(staff) {
        navigation.navigate("StaffPayManage", {id : staff.id });

    }

    function changeDepartmentAlert(staff) {
        if (staff.department === "인사 관리부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '보험 설계부',
                        onPress:() => changeDepartment(staff,1),
                    },
                    {
                        text: '인수 심사부',
                        onPress:() =>  changeDepartment(staff,2),
                    },
                    {
                        text: '영업 관리부',
                        onPress:() =>  changeDepartment(staff,3),
                    },
                    {
                        text: '보상 운영부',
                        onPress:() =>  changeDepartment(staff,5),
                    },
                    {
                    text: '취소',
                    },

                ]
            );
        }else if (staff.department === "보험 설계부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부',
                        onPress:() =>  changeDepartment(staff,4),
                    },
                    {
                        text: '인수 심사부',
                        onPress:() =>  changeDepartment(staff,2),
                    },
                    {
                        text: '영업 관리부',
                        onPress:() =>  changeDepartment(staff,3),
                    },
                    {
                        text: '보상 운영부',
                        onPress:() =>  changeDepartment(staff,5),
                    },
                    {
                        text: '취소',
                    },
                ]
            );
        }else if (staff.department === "인수 심사부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부',
                        onPress:() =>  changeDepartment(staff,4),
                    },
                    {
                        text: '보험 설계부',
                        onPress:() =>  changeDepartment(staff,1),
                    },
                    {
                        text: '영업 관리부',
                        onPress:() =>  changeDepartment(staff,3),
                    },
                    {
                        text: '보상 운영부',
                        onPress:() =>  changeDepartment(staff,5),
                    },
                    {
                        text: '취소',
                    },
                ]
            );
        }else if (staff.department === "영업 관리부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부',
                        onPress:() =>  changeDepartment(staff,4),
                    },
                    {
                        text: '인수 심사부',
                        onPress:() =>  changeDepartment(staff,2),
                    },
                    {
                        text: '보험 설계부',
                        onPress:() =>  changeDepartment(staff,1),
                    },
                    {
                        text: '보상 운영부',
                        onPress:() =>  changeDepartment(staff,5),
                    },
                    {
                        text: '취소',
                    },
                ]
            );
        }else if (staff.department === "보상 운영부") {
            Alert.alert("부서 변경",
                "변경하실 부서를 선택해 주세요.",
                [
                    {
                        text: '인사 관리부',
                        onPress:() =>  changeDepartment(staff,4),
                    },
                    {
                        text: '인수 심사부',
                        onPress:() =>  changeDepartment(staff,2),
                    },
                    {
                        text: '영업 관리부',
                        onPress:() =>  changeDepartment(staff,3),
                    },
                    {
                        text: '보험 설계부',
                        onPress:() =>  changeDepartment(staff,1),
                    },
                    {
                        text: '취소',
                    },
                ]
            );
        }
    }

    function changeDepartment(staff, department) {
        axios.post("http://localhost:8080/staff/department",
            null, {
                params: {id: staff.id, changeDepartment: department}
            }).then(function (resp) {
            if (resp.data.code === 200) {
                alert(resp.data.result.message);
                setStaffs([]);
                getStaff();
            } else {
                Alert.alert("부서 변경 오류",resp.data.message)
            }
        }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });




    }

    function remove(staff) {
        axios.delete("http://localhost:8080/staff"
            ,{
                params: {id: staff.id}
            }).then(function (resp) {
            if (resp.data.code === 200) {
                alert(resp.data.result.message);
                getStaff();
            } else {
                Alert.alert("회원 삭제 오류", resp.data.message);
            }
        }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.listView}>
                {staffs.map((staff) =>
                    <CustomStaffList key={staff.id}
                                     staff={staff}
                                     search={()=>moveStaffInformation(staff)}
                                     pay={()=>moveStaffPayManage(staff)}
                                     move={() => changeDepartmentAlert(staff)}
                                     remove={() => remove(staff)}
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
