import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
    CarInsuranceCreate, CompensationCalculate, CompensationJudge, CompensationManage,
    ContractManage,
    ContractSelect,
    CustomerCarJoin,
    CustomerHouseJoin,
    CustomerInquiry,
    CustomerJoin,
    CustomerManage,
    CustomerSelect,
    CustomerShipJoin,
    FireInsuranceCreate,
    Home,
    InsuranceInquiry,
    InsuranceManage,
    SeaInsuranceCreate,
    StaffInformation,
    StaffManage,
    StaffPayManage,
    UnderwriteManage
} from "../screen";


const MainStack = createStackNavigator();

const MainNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home"
                              component={Home}
                              options={{headerShown: false}}
            />

            <MainStack.Screen name="InsuranceManage"
                              component={InsuranceManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="InsuranceInquiry"
                              component={InsuranceInquiry}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="FireInsuranceCreate"
                              component={FireInsuranceCreate}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CarInsuranceCreate"
                              component={CarInsuranceCreate}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="SeaInsuranceCreate"
                              component={SeaInsuranceCreate}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="StaffManage"
                              component={StaffManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="StaffInformation"
                              component={StaffInformation}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="StaffPayManage"
                              component={StaffPayManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="UnderwriteManage"
                              component={UnderwriteManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="CustomerManage"
                              component={CustomerManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CustomerInquiry"
                              component={CustomerInquiry}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="CustomerSelect"
                              component={CustomerSelect}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CustomerJoin"
                              component={CustomerJoin}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CustomerCarJoin"
                              component={CustomerCarJoin}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CustomerHouseJoin"
                              component={CustomerHouseJoin}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CustomerShipJoin"
                              component={CustomerShipJoin}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="ContractManage"
                              component={ContractManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="ContractSelect"
                              component={ContractSelect}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />

            <MainStack.Screen name="CompensationManage"
                              component={CompensationManage}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CompensationCalculate"
                              component={CompensationCalculate}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
            <MainStack.Screen name="CompensationJudge"
                              component={CompensationJudge}
                              options={{
                                  headerTitle: "",
                                  headerBackTitle: '뒤로가기'
                              }}
            />
        </MainStack.Navigator>
    );
};


export default MainNavigation;
