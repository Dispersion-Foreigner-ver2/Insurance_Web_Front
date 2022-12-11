import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Join, Login, StartPage} from "../screen";



const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="StartPage"
                component={StartPage}
                options={{headerShown: false}}
            />
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: "",
                    headerBackTitle: '뒤로가기'
                }}
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
