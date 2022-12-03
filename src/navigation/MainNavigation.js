import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
    CarInsuranceCreate,
    FireInsuranceCreate,
    Home,
    InsuranceInquiry,
    InsuranceManage, SeaInsuranceCreate,
    StaffInformation,
    StaffManage,
    StaffPayManage
} from "../screen";



const MainStack = createStackNavigator();

const MainNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home}/>

            <MainStack.Screen name="InsuranceManage" component={InsuranceManage}/>
            <MainStack.Screen name="InsuranceInquiry" component={InsuranceInquiry}/>
            <MainStack.Screen name="FireInsuranceCreate" component={FireInsuranceCreate}/>
            <MainStack.Screen name="CarInsuranceCreate" component={CarInsuranceCreate}/>
            <MainStack.Screen name="SeaInsuranceCreate" component={SeaInsuranceCreate}/>

            <MainStack.Screen name="StaffManage" component={StaffManage}/>
            <MainStack.Screen name="StaffInformation" component={StaffInformation}/>
            <MainStack.Screen name="StaffPayManage" component={StaffPayManage}/>
        </MainStack.Navigator>
    );
};


export default MainNavigation;
