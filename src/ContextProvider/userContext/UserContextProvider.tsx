import React, {useState} from 'react';
import UserContext from './UserContext';
import {AuthUser} from './UserContext';

type UserContextProviderProps = {
  children: React.ReactNode;
};
export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;