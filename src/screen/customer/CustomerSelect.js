import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RadioButton} from "react-native-radio-buttons-group";
import axios from "axios";


const CustomerSelect = ({navigation, route}) => {

    const [customers, setCustomers] = useState([]);
    const [selectValues, setSelectValues] = useState([]);
    const [customerId, setCustomerId] = useState(null);
    const [index, setIndex] = useState()

    useEffect(() => {
        //고객 전체 받아오기
    }, []);

    function select(index, id) {
        setCustomerId(id);

        setSelectValues([]);
        for (let i = 0; i < selectValues.length; i++) {
            if (i == index) {
                setSelectValues(selectValues => [...selectValues, true]);
            } else {
                setSelectValues(selectValues => [...selectValues, false]);
            }
        }
        setIndex(index);
    }

    function completeSelect() {
        if (customerId === null) {
            alert("고객을 선택해주세요.");
        } else {
            Alert.alert("선택 하신 고객이 맞으신가요?",
                `[${customers[customerId].id}] ${customers[customerId].name}님`,
                [
                    {
                        text: "예",
                        onPress: () => createContract,
                    },
                    {text: "돌아가기"},
                ]);
        }
    }

    function createContract() {
        if (route.params.type === "C") {
            if (customers[index].car === null) {

            } else {

            }
        }else if (route.params.type === "F") {
            if (customers[index].house === null) {

            } else {

            }
        } else {
            if (customers[index].ship === null) {

            } else {

            }
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.mainText}>계약을 진행할 고객을 선택해주세요.</Text>
                <ScrollView style={styles.scrollView}>
                    {customers.map((customer, index) =>
                                <RadioButton id={customer.id}
                                             key={customer.id}
                                             label={customer.name}
                                             onPress={id => select(index, id)}
                                             containerStyle={styles.insuranceSelectButton}
                                             labelStyle={styles.insuranceSelectText}
                                             selected={selectValues[index]}
                                />
                    )}
                </ScrollView>
                <View style={styles.contractButtonContainer}>
                    <TouchableOpacity onPress={completeSelect}>
                        <View style={styles.contractButtonView}>
                            <Text style={styles.contractButtonText}>선택 완료</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainText: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "black",
        marginBottom: 10,
    },
    scrollView: {
        height: "84.7%",
    },
    insuranceSelectButton: {
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#f5f6fa"
    },
    insuranceSelectText: {
        fontSize: 22,
    },


    contractButtonContainer: {
        height: "4%",
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


export default CustomerSelect;
