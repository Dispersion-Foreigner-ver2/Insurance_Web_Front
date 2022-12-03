import React from "react";
import {StaffProvider} from "./context/Staff";
import Navigation from "./navigation";
import UnderwriteManage from "./screen/underwrite/UnderwriteManage";


const App = () => {


    return (
        <StaffProvider>
            <Navigation />
        </StaffProvider>
        // <UnderwriteManage/>
    );
};


export default App;
