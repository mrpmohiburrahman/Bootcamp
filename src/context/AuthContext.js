import React, {createContext} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

//1. creating our auth context
export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const a = 5
    return(
        <AuthProvider.Provider value={{a}}>
            {children}
        </AuthProvider.Provider>
    )
}