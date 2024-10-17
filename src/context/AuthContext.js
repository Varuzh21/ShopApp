import React, { createContext, useState, useEffect, useCallback } from 'react';
import { ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { postUserRequest } from '../store/actions/users';
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const dispatch = useDispatch();
    const tokenFromStore = useSelector((state) => state.postUserReducer.userToken);

    useEffect(() => {
        (async () => {
            try {
                const storedToken = MMKV.getString("userToken");
                if (storedToken) {
                    setUserToken(storedToken);
                }
            } catch (error) {
                console.error("Failed to load token from storage:", error);
            } finally {
                setIsLoading(false);
            }
        })()
       
    }, [tokenFromStore]);

    const login = useCallback(async (form) => {
        try {
            setIsLoading(true);
            dispatch(postUserRequest(form));
            if (tokenFromStore) {
                setUserToken(tokenFromStore);
                MMKV.setString("userToken", tokenFromStore);
                ToastAndroid.show("Logged in successfully!", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    }, [tokenFromStore]);

    const logout = useCallback(async () => {
        setIsLoading(true);
        try {
            setUserToken(null);
            MMKV.removeItem("userToken");
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    );
};