import React from "react";
import {StaffProvider} from "./context/Staff";
import Navigation from "./navigation";
import UnderwriteManage from "./screen/underwrite/UnderwriteManage";
import {CompensationJudge, CompensationManage, CustomerManage} from "./screen";



const App = () => {


    return (
        <StaffProvider>
            <Navigation />
        </StaffProvider>
        // <CustomerManage/>

    );
};


export default App;
