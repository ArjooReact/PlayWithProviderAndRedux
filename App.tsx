
import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/homeRedux/Store';
import { getDataFromLocalStorage } from './src/storage/AsyncStorage/Asyncstorage';
//import store from './src/redux/homeRedux/Store';
import StackNavigatorLoggedOut from './src/navigators/StackNavigator/StackNavigatorLoggedOut';
import StackNavigatorLoggedIn from './src/navigators/StackNavigator/StackNavigatorLoggedIn';
import UserContextProvider from './src/ContextProvider/userContext/UserContextProvider';
function App(): React.JSX.Element {
    const[loggedIn,setIsLoggedIn]=useState(true)
   // let isLogged:any
  const getAsyncStorageData= async()=>{
    let isLogged= await getDataFromLocalStorage('IS_LOGGED_IN').then((response)=>{
      if(response=='Value inside localStorage is blank!!'){
        setIsLoggedIn(false)
        return false
      }else{
        console.log('INSIDE TRUE CONDITION')
        setIsLoggedIn(true)
        return response
      
      }
    }).catch((error)=>{
        console.log('ERRRRR',error)
    })
    
   }
  useEffect(()=>{
    getAsyncStorageData()
    
  },[])
  return (
    <Provider store={store}>
    <UserContextProvider>
      {/* <StackNavigator isLoggedIn={loggedIn}></StackNavigator> */}
    {loggedIn?(<StackNavigatorLoggedIn></StackNavigatorLoggedIn>):(<StackNavigatorLoggedOut></StackNavigatorLoggedOut>)}
   </UserContextProvider>
   </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
