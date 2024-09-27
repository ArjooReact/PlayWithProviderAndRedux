import React, {createContext, ReactNode, useContext, useState} from 'react';

export type LoginUser = {
isLoggedIn:string
};

export type LoginContextType = {
    loggedIn: LoginUser | null;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<LoginUser | null>>;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export default LoginContext;