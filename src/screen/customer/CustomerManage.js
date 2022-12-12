import React, {useEffect, useState} from "react";
import {Alert, SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomMainButton from "../../component/CustomMainButton";
import axios from "axios";


const CustomerManage = ({navigation}) => {

    useEffect(() => {
        getCustomerCount();
    }, []);

    const [totalCount, setTotalCount] = useState(0);
    const [thisMonthCustomerCount, setThisMonthCustomerCount] = useState(0);
    const [unpaidCustomerCount, setUnpaidCustomerCount] = useState(0);

    function getCustomerCount(){
        axios.get("http://localhost:8080/customer/manage")
            .then(function (resp){
                if (resp.data.code === 200) {
                    setTotalCount(resp.data.result.totalCustomerCount);
                    setThisMonthCustomerCount(resp.data.result.thisMonthCustomerCount);
                    setUnpaidCustomerCount(resp.data.result.thisMonthNotPayCustomerCount);
                } else {
                    Alert.alert("고객 현황 불러오기 오류", resp.data.message);
                }
            })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.mainText}>보험사 고객 현황</Text>
                <View style={styles.countsView}>
                    <View style={styles.countView1}>
                        <Text style={styles.insuranceText1}>총 고객</Text>
                        <Text style={styles.countText1}>{totalCount}</Text>
                    </View>

                    <View style={styles.countView2}>
                        <Text style={styles.insuranceText2}>이 달 가입자</Text>
                        <Text style={styles.countText2}>{thisMonthCustomerCount}</Text>
                    </View>

                    <View style={styles.countView3}>
                        <Text style={styles.insuranceText3}>미납 고객</Text>
                        <Text style={styles.countText3}>{unpaidCustomerCount}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonView}>
                <CustomMainButton  buttonText={"보험가입자 상세 조회"} func={() => navigation.navigate("CustomerInquiry")}/>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        backgroundColor: "white"
    },
    mainView: {
        width: "90%",
        flex: 1,
        marginTop: 20,
    },
    mainText: {
        fontSize: 35,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "black",
        marginBottom: 10,
    },
    countsView: {
        justifyContent:"space-between",
        flexDirection: "row",
        marginTop: 30,
    },
    countView1: {
        height: 110,
        width: 110,
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
        backgroundColor: "#FFB788",

    },
    countView2: {
        height: 110,
        width: 110,
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
        backgroundColor: "#3986E8"
    },
    countView3: {
        height: 110,
        width: 110,
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
        backgroundColor: "#FF88C2"
    },
    insuranceText1: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#FF8230",
        marginBottom: 10,

    },
    countText1: {
        fontSize: 22,
        fontStyle: "italic",
        color: "#FF8230",
        fontWeight: "bold",

    },

    insuranceText2: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#0857BD",
        marginBottom: 10,

    },
    countText2: {
        fontSize: 22,
        fontStyle: "italic",
        color: "#0857BD",
        fontWeight: "bold",

    },

    insuranceText3: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#FF5CAC",
        marginBottom: 10,

    },
    countText3: {
        fontSize: 22,
        fontStyle: "italic",
        color: "#FF5CAC",
        fontWeight: "bold",

    },

    buttonView: {
        width: "80%",
        flex: 1,
        marginBottom: 30,
    },


});

export default CustomerManage;
