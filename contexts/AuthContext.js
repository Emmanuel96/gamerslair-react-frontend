import React, {useContext, useState} from 'react';

export const AuthContext = React.createContext(false)
export const SetAuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function useSetAuth(){
    return useContext(SetAuthContext)
}

// export function AuthContextProvider({children}){
//     const [auth, updateAuth] = useState(false)

//     function setAuth(new_auth){
//         updateAuth(new_auth)
//     }

//     return(
//         <AuthContext.Provider value={auth}>
//             <SetAuthContext.Provider value={setAuth}>
//                 {children}
//             </SetAuthContext.Provider>
//         </AuthContext.Provider>
//     )
// }