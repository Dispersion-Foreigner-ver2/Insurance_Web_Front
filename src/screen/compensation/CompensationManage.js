import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";


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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchView}>
                <TextInput style={styles.searchInput}
                           placeholder={"고객 ID를 입력해 주세요."}
                           returnKeyType={"done"}
                           onChangeText={text => setSearchContent(text)}
                           onSubmitEditing={search}
                />
                <TouchableOpacity style={styles.searchButton} onPress={search}>
                    <View>
                        <Text style={styles.searchButtonText}>검색</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchView: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    searchPicker: {
        width: 100,
    },
    searchPickerContainer: {
        width: 100,
    },
    searchInput: {
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 5,
        width: 200,
        height: "100%",
        borderRadius: 10,
        fontSize: 25,
    },
    searchButton: {
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
        width: 70,
        marginLeft: 7,
        borderRadius: 10,
        backgroundColor: "#7ed6df",
    },
    searchButtonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },





});


export default CompensationManage;
