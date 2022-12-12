import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomContractList from "../../component/CustomContractList";
import axios from "axios";
import CustomCompensationList from "../../component/CustomCompensationList";
import safeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";


const CompensationManage = () => {

    //계약 받아 올 때 보험 종류도 같이 받아오기 -> 보험 종류로 면부책 판단하는 것이 달라짐
    //주의) 인수 심사 받은 보험만 표시

    const [customerId, setCustomerId] = useState();

    const [contracts, setContracts] = useState([]);

    const [insuranceType, setInsuranceType] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getContractList();
    }, []);

    useEffect(() => {
        if (customerId === "") {
            getContractList()
        }
    },[customerId]);


    function getContractList() {
        axios.get("http://localhost:8080/contract/all")
            .then(function (resp){
                if (resp.data.code === 200) {
                    setContracts([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setContracts(contracts => [...contracts,{
                            contractId: resp.data.result[i].contractId,
                            insuranceId: resp.data.result[i].insurance.id,
                            insuranceName: resp.data.result[i].insurance.name,
                        }]);
                    }
                    getInsuranceType();
                } else {
                    Alert.alert("계약 조회 오류", resp.data.message)
                }
            })

    }

    function getInsuranceType() {
        setInsuranceType([]);
        for (let i = 0; i < contracts.length; i++) {
            axios.get("http://localhost:8080/insurance",{
                    params :{id : contracts[i].insuranceId}
                })
                .then(function (resp) {
                    if (resp.data.code === 200) {
                        setInsuranceType(insuranceType => [...insuranceType, resp.data.result.insuranceType]);
                    } else {
                        Alert.alert("보험 종류 조회 오류", resp.data.message)
                    }
                }).catch(function (reason) {
                    Alert.alert("네트워크 오류", "네트워크를 확인해 주세요.")
            });
        }
        setLoading(false)
    }


    function search() {
        axios.get("http://localhost:8080/compensation/manage",{
            params: {customerId : customerId}
        })
            .then(function (resp){
                if (resp.data.code === 200) {
                    setContracts([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setContracts(contracts => [...contracts, resp.data.result[i]]);
                    }
                }
            })
    }

    function moveJudge(insuranceType) {

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.informationView}>
                <View style={styles.inputContainer}>

                    <View style={styles.labelContainer}>
                        <Text>고객 ID</Text>
                    </View>
                    <TextInput keyboardType={"number-pad"}
                               style={styles.textInput}
                               value={customerId}
                               onChangeText={text => setCustomerId(text)}
                    />
                    <TouchableOpacity onPressOut={search}>
                        <View style={styles.searchButtonView}>
                            <Text>검색</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.contractListView}>

                    {
                        loading===true ? (null) : (
                            contracts.map((contract, index) =>
                                <CustomCompensationList key={contract.contractId}
                                                        contractId={contract.contractId}
                                                        insuranceId={contract.insuranceId}
                                                        insuranceName={contract.insuranceName}
                                                        type={insuranceType[index]}
                                />
                        )

                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
);

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },


    informationView: {
        height: " 100%",
    },

    inputContainer: {
        height: 65,
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: -8,
        left: 25,
        padding: 5,
        zIndex: 50,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "steel",
        justifyContent: 'flex-end',
        height: 44,
        borderRadius: 65,
        paddingHorizontal: 25,

    },
    searchButtonView: {
        position: 'absolute',
        backgroundColor: "skyblue",
        top: -52,
        right: 18,
        zIndex: 50,
        width: 70,
        height: 40,
        borderRadius: 65,
        alignItems: "center",
        justifyContent: "center",
    },

    contractListView: {
        backgroundColor: "white",
        height: "70%"
    },

    contractList: {
        height: 60,
        flexDirection: "row",
    },


    contractButtonContainer: {
        backgroundColor: "white",
        height: "10%",
        alignItems: "center",
        zIndex: 50,
        borderTopWidth: 0.2,
    },
    contractButtonView: {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: "skyblue",
        height: 60,
        width: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    contractButtonText: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold",
    },


});

export default CompensationManage;
