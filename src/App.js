import React from "react";
import {StaffProvider} from "./context/Staff";
import Navigation from "./navigation";
import UnderwriteManage from "./screen/underwrite/UnderwriteManage";
import {
    CompensationJudge,
    CompensationManage,
    ContractManage,
    ContractSelect,
    CustomerJoin,
    CustomerManage
} from "./screen";
import CompensationCalculate from "./screen/compensation/CompensationCalculate";
import CustomerPayManage from "./screen/customer/CustomerPayManage";



const App = () => {


    return (
        // <StaffProvider>
        //     <Navigation />
        // </StaffProvider>
        // <ContractManage/>
        // <ContractSelect/>
        // <CustomerJoin/>
        <UnderwriteManage/>
    );
};


export default App;
