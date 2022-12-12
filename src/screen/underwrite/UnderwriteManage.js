import React, {useEffect, useState} from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import CustomUnderwriteList from "../../component/CustomUnderwriteList";
import axios from "axios";


const UnderwriteManage = ({navigation}) => {

    useEffect(() => {
        getContractList()
    }, []);


    const [contracts, setContracts] = useState([]);
    const [customerId, setCustomerId] = useState();

    useEffect(() => {
        if (customerId === "") {
            getContractList();
        }
    }, [customerId]);

    function getContractList() {
        axios.get("http://localhost:8080/contract/under-write/all")
            .then(function (resp) {
                if (resp.data.code === 200) {
                    console.log(resp.data.result);
                    setContracts([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setContracts(contracts => [...contracts, resp.data.result[i]]);
                    }
                } else {
                    Alert.alert("인수 심사 조회 오류", resp.data.message)
                }
            });
    }

    function searchCustomer() {
        axios.get("http://localhost:8080/contract/under-write/customer", {
            params: {customerId: customerId}
        }).then(function (resp) {
            if (resp.data.code === 200) {
                setContracts([]);
                for (let i = 0; i < resp.data.result.length; i++) {
                    setContracts(contracts => [...contracts, resp.data.result[i]]);
                }
            }else {
                Alert.alert("검색 오류", resp.data.message)
            }
        });
    }

    function checkUnderwrite(contractId) {
        Alert.alert("인수 심사",
            "인수 심사가 아직 진행되지 않았습니다. 인수 심사를 진행하시겠습니까?",
            [
                {
                    text: "예",
                    onPress: () => underwrite(contractId)
                },
                {
                    text: "아니요"
                }
            ]
            )
    }

    function underwrite(contractId) {
        //인수심사 진행 - back
        axios.post(`http://localhost:8080/contract/under-write/${contractId}`,
            null, {
                params: {contractId: contractId}
            }).then(function (resp) {
            if (resp.data.code === 200) {
                Alert.alert("인수 심사 결과", resp.data.result.message);
                getContractList()
            } else {
                Alert.alert("인수 심사 오류", resp.data.message);
            }
        }).catch(function (reason) {
            Alert.alert("네트워크 오류", "네트워크 연결을 확인해주세요.")
        });
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>

                <View style={styles.labelContainer}>
                    <Text>고객 ID</Text>
                </View>
                <TextInput keyboardType={"number-pad"}
                           style={styles.textInput}
                           value={customerId}
                           onChangeText={text => setCustomerId(text)}
                />
                <TouchableOpacity onPressOut={searchCustomer}>
                    <View style={styles.searchButtonView}>
                        <Text>검색</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.contractListView}>
                {contracts.map((contract) =>
                    <CustomUnderwriteList
                        contract={contract}
                        key={contract.contractId}
                        underwrite={() => checkUnderwrite(contract.contractId)}
                    />
                )}
            </ScrollView>
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
        height: "100%"
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


export default UnderwriteManage;
