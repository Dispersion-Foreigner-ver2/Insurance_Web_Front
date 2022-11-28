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
                        <Text style={styles.insuranceText1}>총 보험</Text>
                        <Text style={styles.countText1}>{totalCount}</Text>
                    </View>

                    <View style={styles.countView2}>
                        <Text style={styles.insuranceText2}>인가 성공</Text>
                        <Text style={styles.countText2}>{authorizeCount}</Text>
                    </View>

                    <View style={styles.countView3}>
                        <Text style={styles.insuranceText3}>인가 실패</Text>
                        <Text style={styles.countText3}>{notAuthorizeCount}</Text>
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

export default InsuranceManage;
