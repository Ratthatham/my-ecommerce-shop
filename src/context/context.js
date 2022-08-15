import React from "react";
import { createContext, useState } from "react";


//as 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null // Syntax: createContext(default value)
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

 