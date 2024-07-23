import React, { useState } from "react";
import userContext from "./UserContext";

const [user , setUser] = useState(null);

const UserContextProvider = ({children}) =>{
    return (
        <userContext.Provider value={{ user , setUser}}>
        {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;