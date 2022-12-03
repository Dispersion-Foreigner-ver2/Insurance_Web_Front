import React, {useContext} from "react";
import AuthNavigation from "./AuthNavigation";
import {StaffContext} from "../context/Staff";
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./MainNavigation";


const Navigation = () => {

    const {staff} = useContext(StaffContext);

    return (
        <NavigationContainer>
            {staff?.name && staff?.staffId && staff?.department ? <MainNavigation/> : <AuthNavigation/>}
        </NavigationContainer>


    );
};


export default Navigation;
