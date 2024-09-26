import React, { createContext, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserRequest } from '../store/actions/users';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const dispatch = useDispatch();

    const token = useSelector((state) => state.postUserReducer.userToken)

    const login = useCallback((form) => {
        setIsLoading(true);
        dispatch(postUserRequest(form));
        setUserToken(token);
        AsyncStorage.setItem("userToken", JSON.stringify(userToken));
        setIsLoading(false);
    }, []) 

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem("userToken");
        setIsLoading(false);
    }

    const isLidding = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem("userToken");
            if (userToken) {
                setUserToken(userToken);
            }
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        isLidding();
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}