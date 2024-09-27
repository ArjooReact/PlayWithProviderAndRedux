import React,{useContext} from 'react'
import LoginContext from '../userContext/LoginContext';

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error('useLoginContext must be used within a LoginContextProvider');
    }
    return context;
};