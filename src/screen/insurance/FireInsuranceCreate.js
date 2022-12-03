import React, {useState} from "react";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";
import axios from "axios";
import CustomButton from "../../component/CustomButton";

const FireInsuranceCreate = () => {

    const [name, setName] = useState("");
    const [explanation, setExplanation] = useState("");
    const [premium, setPremium] = useState(0);
    const [surroundingDamage, setSurroundingDamage] = useState(0);
    const [humanDamage, setHumanDamage] = useState(0);
    const [buildingDamage, setBuildingDamage] = useState(0);


    function checkCreate() {
        let check = false;

        Alert.alert("해당 정보가 맞습니까?",
            `보험 이름: ${name}\n보험 설명: ${explanation}\n보험료: ${premium}\n주변 피해 보상금: ${surroundingDamage}\n인적 피해 보상금: ${humanDamage}\n건물 피해 보상금: ${buildingDamage}`,
            [
                {
                    text: "예",
                    onPress: () => createFireInsurance


                },
                {
                    text: "아니요",
                    onPress: () => {
                        setName("");
                        setExplanation("");
                        setPremium("");
                        setSurroundingDamage("")
                        setHumanDamage("");
                        setBuildingDamage("");
                    }
                }
            ]
            )
    }

    function createFireInsurance() {
        axios.post("http://localhost:8080/insurance/design/fire",
            null,
            {
                params: {
                    name: name,
                    explanation: explanation,
                    premium: premium,
                    surroundingDamageBasicMoney: surroundingDamage,
                    humanDamageBasicMoney: humanDamage,
                    buildingDamageBasicMoney: buildingDamage
                }
            })
            .then(function (resp) {
                if (resp.data.httpStatus === "ACCEPTED") {
                    alert("보험을 성공적으로 만들었습니다.");
                } else {
                    alert("보험 생성에 실패하였습니다. 다시 시도해주세요.")
                    setName("");
                    setExplanation("");
                    setPremium("");
                    setSurroundingDamage("")
                    setHumanDamage("");
                    setBuildingDamage("");
                }
            }).catch(function (err) {
            console.log(`Error message : ${err}`)
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

                <CustomTextInput title={"주변 피해 보상금"}
                                 onchangeText={setSurroundingDamage}
                                 keyboardType={"number-pad"}
                                 placeholder={"주변 피해 보상금을 입력해주세요."}
                                 value={surroundingDamage}
                />
                <CustomTextInput title={"인적 피해 보상금"}
                                 onchangeText={setHumanDamage}
                                 keyboardType={"number-pad"}
                                 placeholder={"인적 피해 보상금을 입력해주세요."}
                                 value={humanDamage}
                />
                <CustomTextInput title={"건물 피해 보상금"}
                                 onchangeText={setBuildingDamage}
                                 keyboardType={"number-pad"}
                                 placeholder={"건물 피해 보상금을 입력해주세요."}
                                 value={buildingDamage}
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


export default FireInsuranceCreate;
