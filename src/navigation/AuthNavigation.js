import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Join, Login} from "../screen";



const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator >
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <AuthStack.Screen
                name="Join"
                component={Join}
                options={{
                    headerTitle: "",
                    headerBackTitle: '뒤로가기'
            }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;
