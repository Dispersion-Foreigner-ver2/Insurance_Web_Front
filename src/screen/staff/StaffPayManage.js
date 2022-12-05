import React, {useEffect} from "react";
import {SafeAreaView, Text, View} from "react-native";
import CustomButton from "../../component/CustomButton";
import CustomInformationText from "../../component/CustomInformationText";
import axios from "axios";


const StaffPayManage = ({route, changePosition}) => {

    return (
        <SafeAreaView>
            <View>
                <CustomInformationText title={"직급"} content={route.params.position} />
                <CustomInformationText title={"근무 일 수"} content={route.params.workDay} />
                <CustomInformationText title={"보너스 실적"} content={route.params.result} />
                <CustomInformationText title={"최종 월급"} content={route.params.totalSalary} />

                <View>
                    <CustomButton text="직급 변경하기" func={() =>changePosition}/>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default StaffPayManage;
