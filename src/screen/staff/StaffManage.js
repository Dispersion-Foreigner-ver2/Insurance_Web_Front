import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomStaffList from "../../component/CustomStaffList";
import axios from "axios";


const StaffManage = ({navigation}) => {

    const [staffs, setStaffs] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:8080/staff")
            .then(function (resp){
                for (let i = 0; i < resp.data.result.length; i++) {
                    setStaffs( staffs =>[...staffs, resp.data.result[i]]);
                }
            })
    }, []);

    function moveStaffInformation(staff) {
        axios.get("http://localhost:8080/staff/detail", {
                params:{
                    id: staff.id
                }
            })
            .then(function (resp){
                navigation.navigate("StaffInformation", {id: resp.data.result.id, department: resp.data.result.department, name:resp.data.result.name, joinDate: resp.data.result.joinDate, ssn:resp.data.result.ssn, email: resp.data.result.email,
                    phoneNum: resp.data.result.phoneNum});
            })

    }

    function moveStaffPayManage(staff) {
        axios.get("http://localhost:8080/staff/salary", {
            params:{
                id: staff.id
            }})
            .then(function (resp){
                navigation.navigate("StaffPayManage", {position: resp.data.result.position, workDay: resp.data.result.workDay,
                    result: resp.data.result.result, totalSalary: resp.data.result.totalSalary,});
            })
    }
e
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
            alert(resp.data.result.message)

            setStaffs([]);
            axios.get("http://localhost:8080/staff")
                .then(function (resp){
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setStaffs( staffs =>[...staffs, resp.data.result[i]]);
                    }
                    console.log(staffs)
                })

        }).catch(function (reason) {
            alert("네트워크 오류");
        });




    }

    function remove(staff) {
        axios.delete("http://localhost:8080/staff"
            ,{
                params: {id: staff.id}
            }).then(function (resp) {
            alert(resp.data.result.message)

            setStaffs([]);
            axios.get("http://localhost:8080/staff")
                .then(function (resp){
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setStaffs( staffs =>[...staffs, resp.data.result[i]]);
                    }
                })
        }).catch(function (reason) {
            alert("네트워크 오류");
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
