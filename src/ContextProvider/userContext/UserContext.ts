import React, {createContext, ReactNode, useContext, useState} from 'react';

export type AuthUser = {
  userName: string;
  passWord: string;
};

export type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;