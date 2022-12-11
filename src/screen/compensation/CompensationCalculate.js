import React, {useState} from "react";
import {SafeAreaView, View} from "react-native";
import CustomTextInput from "../../component/CustomTextInput";
import CustomMainButton from "../../component/CustomMainButton";


const CompensationCalculate = () => {

    const type = "C";
    const [carDamage, setCarDamage] = useState();
    const [humanDamage, setHumanDamage] = useState();
    const [buildingDamage, setBuildingDamage] = useState();
    const [surroundingDamage, setSurroundingDamage] = useState();
    const [generalDamage, setGeneralDamage] = useState();
    const [revenueDamage, setRevenueDamage] = useState();

    return (
        <SafeAreaView>
            {type === "C" ? (
                <View>
                    <CustomTextInput title={"차 파손 상태"}
                                     value={carDamage}
                                     onchangeText={text => setCarDamage(text)}
                                     keyboardType={"number-pad"}
                    />
                    <CustomTextInput title={"인적 피해 상태"}
                                     value={humanDamage}
                                     onchangeText={text => setHumanDamage(text)}
                                     keyboardType={"number-pad"}
                    />
                </View>
            ) : (
                type === "F" ? (
                    <View>
                        <CustomTextInput title={"화재 장소 파손 상태"}
                                         value={buildingDamage}
                                         onchangeText={text => setBuildingDamage(text)}
                                         keyboardType={"number-pad"}
                        />
                        <CustomTextInput title={"인적 피해 상태"}
                                         value={humanDamage}
                                         onchangeText={text => setHumanDamage(text)}
                                         keyboardType={"number-pad"}
                        />
                        <CustomTextInput title={"주변 피해 상태"}
                                         value={surroundingDamage}
                                         onchangeText={text => setSurroundingDamage(text)}
                                         keyboardType={"number-pad"}
                        />
                    </View>
                ) : (
                    <View>
                        <CustomTextInput title={"제반 손해 상태"}
                                         value={generalDamage}
                                         onchangeText={text => setGeneralDamage(text)}
                                         keyboardType={"number-pad"}
                        />
                        <CustomTextInput title={"수익 손해 상태"}
                                         value={revenueDamage}
                                         onchangeText={text => setRevenueDamage(text)}
                                         keyboardType={"number-pad"}
                        />
                    </View>
                )
            )}
            <CustomMainButton buttonText={"계산 하기"}/>
        </SafeAreaView>
    );
};


export default CompensationCalculate;
