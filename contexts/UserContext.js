import React, {useContext, useState} from 'react';

export const UserContext = React.createContext()
export const SetUserContext = React.createContext()

export function useUser(){
    return useContext(UserContext)
}
export function useSetUser(){
    return useContext(SetUserContext)
}

export function UserContextProvider({children}){
    const [user, updateUser] = useState()

    function setUser(new_user){
        updateUser(new_user)
    }

    return(
        <UserContext.Provider value={user}>
            <SetUserContext.Provider value={setUser}>
                {children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}