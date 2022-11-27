import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomMainButton from "../../component/CustomMainButton";


const InsuranceManage = () => {

    const [totalCount, setTotalCount] = useState(0);
    const [authorizeCount, setAuthorizeCount] = useState(0);
    const [notAuthorizeCount, setNotAuthorizeCount] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.mainText}>보험사 보험 현황</Text>
                <View style={styles.countsView}>
                    <View style={styles.countView1}>
                        <Text style={styles.insuranceText}>총 보험</Text>
                        <Text style={styles.countText}>{totalCount}</Text>
                    </View>

                    <View style={styles.countView2}>
                        <Text style={styles.insuranceText}>인가 성공</Text>
                        <Text style={styles.countText}>{totalCount}</Text>
                    </View>

                    <View style={styles.countView3}>
                        <Text style={styles.insuranceText}>인가 실패</Text>
                        <Text style={styles.countText}>{totalCount}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonView}>
                <CustomMainButton buttonText={"보험 목록 조회"}/>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
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
        backgroundColor: "#ff9f1a",

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
        backgroundColor: "#1dd1a1"
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
        backgroundColor: "#ff6b6b"
    },
    insuranceText: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,

    },
    countText: {
        fontSize: 22,
        fontStyle: "italic",
        color: "white",
        fontWeight: "bold",

    },

    buttonView: {
        width: "80%",
        flex: 1,
        marginBottom: 30,
    },


});

export default InsuranceManage;
