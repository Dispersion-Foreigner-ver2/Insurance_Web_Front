import React, {useState} from "react";
import axios from "axios";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";
import CustomButton from "../../component/CustomButton";


const CarInsuranceCreate = ({navigation}) => {

    const [name, setName] = useState("");
    const [explanation, setExplanation] = useState("");
    const [premium, setPremium] = useState(0);
    const [humanDamage, setHumanDamage] = useState(0);
    const [carDamage, setCarDamage] = useState(0);


    function checkCreate() {

        Alert.alert("해당 정보가 맞습니까?",
            `보험 이름: ${name}\n보험 설명: ${explanation}\n보험료: ${premium}\n인적 피해 보상금: ${humanDamage}\n자동차 피해 보상금: ${carDamage}`,
            [
                {
                    text: "예",
                    onPress: () => createCarInsurance()
                },
                {
                    text: "아니요",
                    onPress: () => {
                        setName("");
                        setExplanation("");
                        setPremium("");
                        setHumanDamage("");
                        setCarDamage("");
                    }
                }
            ]
        )
    }

    function createCarInsurance() {
        axios.post("http://localhost:8080/insurance/design/car",
            null,
            {
                params: {
                    name: name,
                    explanation: explanation,
                    premium: premium,
                    humanDamageBasicMoney: humanDamage,
                    carDamageBasicMoney: carDamage
                }
            })
            .then(function (resp) {
                if (resp.data.result.name !== "") {
                    alert("보험을 성공적으로 만들었습니다.");
                    navigation.navigate("InsuranceInquiry", {change: true})
                } else {
                    alert("보험 생성에 실패하였습니다. 다시 시도해주세요.")
                    setName("");
                    setExplanation("");
                    setPremium("");
                    setHumanDamage("");
                    setCarDamage("");
                }
            }).catch(function (err) {
            alert("네트워크 오류 발생");
        });
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>

                <CustomTextInput title={"보험 이름"}
                                 onchangeText={setName}
                                 placeholder={"보험 이름을 입력해주세요."}
                                 value={name}
                />

                <View style={styles.container}>
                    <View style={styles.labelContainer}>
                        <Text>보험 설명</Text>
                    </View>
                    <TextInput onChangeText={val => setExplanation(val)}
                               placeholder={"보험 설명을 입력해주세요."}
                               style={styles.textInput}
                               multiline={true}
                               value={explanation}

                    />
                </View>

                <CustomTextInput title={"보험료"}
                                 onchangeText={setPremium}
                                 keyboardType={"number-pad"}
                                 placeholder={"보험료를 입력해주세요."}
                                 value={premium}
                />

                <CustomTextInput title={"인적 피해 보상금"}
                                 onchangeText={setHumanDamage}
                                 keyboardType={"number-pad"}
                                 placeholder={"인적 피해 보상금을 입력해주세요."}
                                 value={humanDamage}
                />
                <CustomTextInput title={"자동차 피해 보상금"}
                                 onchangeText={setCarDamage}
                                 keyboardType={"number-pad"}
                                 placeholder={"자동차 피해 보상금을 입력해주세요."}
                                 value={carDamage}
                />

                <CustomButton text={"제출하기"} func={checkCreate} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    },
    container: {
        height: 500,
        position: 'relative',
        margin: 10,

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
        height: 400,
        borderRadius: 65,
        paddingHorizontal: 25,
        marginTop: 10,
        textAlignVertical: 'top',

    }


});

export default CarInsuranceCreate;
