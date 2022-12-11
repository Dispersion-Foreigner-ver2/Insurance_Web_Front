import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomContractList from "../../component/CustomContractList";


const CompensationManage = () => {

    //계약 받아 올 때 보험 종류도 같이 받아오기 -> 보험 종류로 면부책 판단하는 것이 달라짐
    //주의) 인수 심사 받은 보험만 표시

    const [searchContent, setSearchContent] = useState();

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        //계약 전체 리스트 받아오기
    }, []);



    function search() {

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
                    />
                    <TouchableOpacity >
                        <View style={styles.searchButtonView}>
                            <Text>검색</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.contractListView}>
                </ScrollView>
                <View style={styles.contractButtonContainer}>
                    <TouchableOpacity >
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


    informationView: {
        height: " 69.5%",
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

export default CompensationManage;
