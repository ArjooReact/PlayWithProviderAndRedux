// import React, {useState} from 'react';

// import { LoginContextType, LoginUser } from './LoginContext';
// import LoginContext from './LoginContext';

// type LoginContextProviderProps = {
//   children: React.ReactNode;
// };
// export const LoginContextProvider = ({children}: LoginContextProviderProps) => {
//   const [user, setUser] = useState<LoginUser | null>(null);

//   return (
//     <LoginContext.Provider value={{user, setUser}}>
//       {children}
//     </LoginContext.Provider>
//   );
// };
// export default LoginContextProvider;


import React, {useState} from 'react';
import { LoginUser } from './LoginContext';
import LoginContext from './LoginContext';

type LoginContextProviderProps = {
  children: React.ReactNode;
};
export const LoginContextProvider = ({children}: LoginContextProviderProps) => {
  const [loggedIn, setIsLoggedIn] = useState<LoginUser | null>(null);

  return (
    <LoginContext.Provider value={{loggedIn, setIsLoggedIn}}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;