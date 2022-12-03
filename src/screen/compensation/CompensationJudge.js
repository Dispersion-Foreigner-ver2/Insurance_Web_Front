import React from "react";
import {SafeAreaView, View} from "react-native";
import RadioGroup from "react-native-radio-buttons-group/lib/RadioGroup";
import {RadioButton} from "react-native-radio-buttons-group";


const CompensationJudge = () => {
    const data = [
        {
            label: 'data 1'
        },
        {
            label: 'data 2'
        }
    ];
    return (
        <SafeAreaView>
            <View>
                <RadioButton id={1}
                             label={"data1"}
                             />
            </View>
        </SafeAreaView>
    );
};


export default CompensationJudge;
