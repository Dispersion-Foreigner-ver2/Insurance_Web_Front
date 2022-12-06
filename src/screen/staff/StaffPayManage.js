import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, Text, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInformationText from "../../component/CustomInformationText";
import axios from "axios";


const StaffPayManage = ({route}) => {

    const [staffPaid, setStaffPaid] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8080/staff/salary", {
            params:{
                id: route.params.id
            }})
            .then(function (resp){
                setStaffPaid(resp.data.result)
            })
    }, [])



    function selectPosition() {
        console.log("!@312")
        switch (staffPaid.position) {
            case "평사원":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "주임",
                            onPress: () => setPosition(2),
                        },
                        {
                            text: "대리",
                            onPress: () => setPosition(3),
                        },
                        {
                            text: "과장",
                            onPress: () => setPosition(4),
                        },
                        {
                            text: "차장",
                            onPress: () => setPosition(5),
                        },
                        {
                            text: "부장",
                            onPress: () => setPosition(6),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
            case "주임":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "평사원",
                            onPress: () => setPosition(1),
                        },
                        {
                            text: "대리",
                            onPress: () => setPosition(3),
                        },
                        {
                            text: "과장",
                            onPress: () => setPosition(4),
                        },
                        {
                            text: "차장",
                            onPress: () => setPosition(5),
                        },
                        {
                            text: "부장",
                            onPress: () => setPosition(6),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
            case "대리":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "평사원",
                            onPress: () => setPosition(1),
                        },
                        {
                            text: "주임",
                            onPress: () => setPosition(2),
                        },
                        {
                            text: "과장",
                            onPress: () => setPosition(4),
                        },
                        {
                            text: "차장",
                            onPress: () => setPosition(5),
                        },
                        {
                            text: "부장",
                            onPress: () => setPosition(6),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
            case "과장":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "평사원",
                            onPress: () => setPosition(1),
                        },
                        {
                            text: "주임",
                            onPress: () => setPosition(2),
                        },
                        {
                            text: "대리",
                            onPress: () => setPosition(3),
                        },
                        {
                            text: "차장",
                            onPress: () => setPosition(5),
                        },
                        {
                            text: "부장",
                            onPress: () => setPosition(6),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
            case "차장":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "평사원",
                            onPress: () => setPosition(1),
                        },
                        {
                            text: "주임",
                            onPress: () => setPosition(2),
                        },
                        {
                            text: "대리",
                            onPress: () => setPosition(3),
                        },
                        {
                            text: "과장",
                            onPress: () => setPosition(4),
                        },
                        {
                            text: "부장",
                            onPress: () => setPosition(6),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
            case "부장":
                Alert.alert(
                    "직급을 변경하시겠습니까?",
                    "변경하실 직급을 선택해주세요.",
                    [
                        {
                            text: "평사원",
                            onPress: () => setPosition(1),
                        },
                        {
                            text: "주임",
                            onPress: () => setPosition(2),
                        },
                        {
                            text: "대리",
                            onPress: () => setPosition(3),
                        },
                        {
                            text: "과장",
                            onPress: () => setPosition(4),
                        },
                        {
                            text: "차장",
                            onPress: () => setPosition(5),
                        },
                        {
                            text: "취소",
                        },
                    ]
                )
                break;
        }



    }


    function setPosition(position) {

        axios.post('http://localhost:8080/staff/position',
            null, {
                params: {
                    id: route.params.id,
                    changePosition: position,
                }
            }).then(function (resp) {
            alert(resp.data.result.message);
                axios.get("http://localhost:8080/staff/salary", {
                    params:{
                        id: route.params.id
                    }})
                    .then(function (resp){
                        setStaffPaid(resp.data.result)
                    })
        }).catch(function (reason) {
            alert(reason)
        });
    }


    return (
        <SafeAreaView>
            <View>
                <CustomInformationText title={"직급"} content={staffPaid.position} />
                <CustomInformationText title={"근무 일 수"} content={staffPaid.workDay} />
                <CustomInformationText title={"보너스 실적"} content={staffPaid.result} />
                <CustomInformationText title={"최종 월급"} content={staffPaid.totalSalary} />

                <View>
                    <CustomButton text="직급 변경하기" func={selectPosition}/>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default StaffPayManage;
