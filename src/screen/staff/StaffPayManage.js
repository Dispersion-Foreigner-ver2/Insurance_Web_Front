import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInformationText from "../../component/CustomInformationText";


const StaffPayManage = ({}) => {

    return (
        <SafeAreaView>
            <View>
                <CustomInformationText title={"직급"} content={"staff.position"} />
                <CustomInformationText title={"근무 일 수"} content={"staff.position"} />
                <CustomInformationText title={"보너스 실적"} content={"staff.position"} />
                <CustomInformationText title={"최종 월급"} content={"staff.position"} />

                <View>
                    <CustomButton text="직급 변경하기"/>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default StaffPayManage;
