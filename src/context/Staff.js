import React, { useState, createContext } from 'react';

const StaffContext = createContext({
    staff: { staffId: null, name: null, department: null },
    dispatch: () => {},
});

const StaffProvider = ({ children }) => {
    const [staff, setStaff] = useState({});
    const dispatch = ({ staffId, name, department}) => {
        setStaff({ staffId, name, department });
    };

    const value = { staff, dispatch };

    return <StaffContext.Provider value={value}>{children}</StaffContext.Provider>;
};

export { StaffContext, StaffProvider };
