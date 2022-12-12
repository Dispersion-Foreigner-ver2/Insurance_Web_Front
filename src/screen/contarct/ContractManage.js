import React, {useEffect, useState} from "react";
import {
    Alert,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import axios from "axios";
import CustomContractList from "../../component/CustomContractList";


const ContractManage = ({navigation}) => {

    const [insurances, setInsurances] = useState([]);

    const [contracts, setContracts] = useState([]);

    const [customerId, setCustomerId] = useState(null);

    useEffect(() => {
        getInsuranceList();
    }, []);

    useEffect(() => {
        if (customerId === null || customerId === "") {
            getContractList();
        }
    }, [customerId]);


    function getInsuranceList() {
        axios.get("http://localhost:8080/contract")
            .then(function (resp) {
                if (resp.data.code === 200) {
                    setInsurances([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setInsurances(insurances => [...insurances, resp.data.result[i]]);
                    }
                } else {
                    Alert.alert("계약 조회 오류", resp.data.message)
                }

            }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }

    function getContractList() {
        axios.get("http://localhost:8080/contract/all")
            .then(function (resp) {
                if (resp.data.code === 200) {
                    setContracts([]);
                    for (let i = 0; i < resp.data.result.length; i++) {
                        setContracts(contracts => [...contracts, resp.data.result[i]]);
                    }
                } else {
                    Alert.alert("보험 조회 오류", resp.data.message)
                }

            }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }

    function contractSearch() {
        axios.get("http://localhost:8080/contract/search/all", {
            params: {customerId: customerId}
        }).then(function (resp) {
            if (resp.data.code !== 200) {
                Alert.alert("계약 검색 오류",resp.data.message)
                setCustomerId(null);
            } else {
                setContracts([]);
                for (let i = 0; i < resp.data.result.length; i++) {
                    setContracts(contracts => [...contracts,
                        {
                            contractId : resp.data.result[i].contractId,
                             customer: {
                                id: resp.data.result[i].customerId,
                                name:resp.data.result[i].customerName,
                             },
                            insurance: {
                                id: resp.data.result[i].customerInsuranceId,
                                name:resp.data.result[i].customerInsuranceName,
                            },
                        }]);
                }
            }
            }).catch(function (reason) {
            alert("네트워크 오류 발생");
        });
    }

    function deleteContract(contractId) {
        axios.delete("http://localhost:8080/contract/terminate", {
            params: {contractId: contractId}
        }).then(function (resp) {
            if (resp.data.code === 200) {
                alert(`${resp.data.result.localDate}, ${resp.data.result.message}`);
                getContractList();
            } else {
                Alert.alert("계약 해제 오류", resp.data.message)
            }
        }).catch(function (reason) {
            alert("오류 발생")
        });

    }

    function moveCreateContract() {
        navigation.navigate("ContractSelect")
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={insurances}
                      style={styles.listView}
                      horizontal={true}
                      renderItem={({item, index}) =>
                          <View style={styles.countView}>
                              <Text style={styles.insuranceText}>[{item.insuranceId}] {item.insuranceName}</Text>
                              {item.insuranceType === "C" ? (
                                  <Image source={require("../../../assets/icons/car.png")}/>
                              ) : (
                                  item.insuranceType === "F" ? (
                                      <Image source={require("../../../assets/icons/fire.png")}/>
                                  ) : (
                                      <Image source={require("../../../assets/icons/ship.png")}/>
                                  )
                              )}
                              <Text style={styles.countText}>{item.insuranceResignCount}</Text>
                          </View>
            }/>

            <View style={styles.informationView}>
                <View style={styles.inputContainer}>

                    <View style={styles.labelContainer}>
                        <Text>고객 ID</Text>
                    </View>
                    <TextInput onChangeText={text => setCustomerId(text)}
                               keyboardType={"number-pad"}
                               style={styles.textInput}
                               value={customerId}
                    />
                    <TouchableOpacity onPress={ contractSearch}>
                        <View style={styles.searchButtonView}>
                            <Text>검색</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.contractListView}>
                    {contracts.map((contract  =>
                            <CustomContractList
                                                key={contract.contractId}
                                                contractId={contract.contractId}
                                                customerId={contract.customer.id}
                                                customerName={contract.customer.name}
                                                insuranceId={contract.insurance.id}
                                                insuranceName={contract.insurance.name}
                                                func={() => deleteContract(contract.contractId)}
                            />
                    ))}

                </ScrollView>
                <View style={styles.contractButtonContainer}>
                   <TouchableOpacity onPress={ moveCreateContract}>
                       <View style={styles.contractButtonView}>
                           <Text style={styles.contractButtonText}>계약 하기</Text>
                       </View>
                   </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    listView:{
        height: "50%",
        marginTop: 10,
        marginBottom: 30,
    },
    countView: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderRadius: "20%",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,

    },
    insuranceText: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginBottom: 10,

    },
    countText: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",

    },

    informationView: {
        height: "80%",
        top: 10
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
        height: "60%"
    },

    contractList: {
        height: 60,
        flexDirection: "row",
    },


    contractButtonContainer: {
        backgroundColor: "white",
        height: "45%",
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


export default ContractManage;
