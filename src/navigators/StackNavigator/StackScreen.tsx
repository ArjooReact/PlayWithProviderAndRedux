import React,{useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView, View } from 'react-native'
import { StackNavigatorTypes } from './StackNavigatorType'
import DashBoard from '../../components/Dashboard/DashBoard'
import LoginScreen from '../../components/Login/LoginScreen'
import { GLOBAL_USER_NAME } from '../../storage/KeychainStorage/Keychain'
import { getCredentials,getCredentialsUsingKeychain } from '../../storage/KeychainStorage/Keychain'
import { getDataFromLocalStorage } from '../../storage/AsyncStorage/Asyncstorage'
const StackScreen:React.FC<StackNavigatorTypes>=({isLoggedIn})=>{
    const Stack=createNativeStackNavigator()
    const[loggedIn,setIsLoggedIn]=useState(isLoggedIn)
   

     const getAsyncStorageData= async()=>{
      let isLogged:any= await getDataFromLocalStorage('IS_LOGGED_IN').then((response)=>{
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
      console.log('CALLING STACK NAVIGATIONNNNN:rr:::::::::::::::',isLoggedIn)
      //getAsyncStorageData()
      setIsLoggedIn(isLoggedIn)
      
    },[loggedIn])
    
  
      //console.log('inside if condition',loggedIn)
      return(
        <NavigationContainer>
          <Stack.Screen
             name="LoginScreen"
             component={LoginScreen}
             options={{title: 'Login', headerShown:false}}
           />
         <Stack.Screen
             name="DashBoard"
             component={DashBoard}
             options={{title: 'DashBoard'}}
           />
     </NavigationContainer>
   
        
   
     
       )

     
      
    }
   

export default StackScreen