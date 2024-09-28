import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import { StackNavigatorTypes } from './StackNavigatorType'
import DashBoard from '../../components/Dashboard/DashBoard'
import LoginScreen from '../../components/Login/LoginScreen'
import Registration from '../../components/Registration/Registration'

const StackNavigator:React.FC<StackNavigatorTypes>=({title})=>{
  const [isLoggedIn,setIsLoggedIn]=useState(true)
  let asyncData = useSelector((state:any)=>{
    return JSON.stringify(state.userCredentials.userData.isLoggedIn)
  })
 
 
    const Stack=createNativeStackNavigator()
  
    return <NavigationContainer>
    <Stack.Navigator 
    initialRouteName={isLoggedIn? 'DashBoard':'LoginScreen'}
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'tomato'},
    }}
    >
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

      <Stack.Screen
          name="Registration"
          component={Registration}
          options={{title: 'Registration'}}
        />   

    </Stack.Navigator>

    </NavigationContainer>

}
export default StackNavigator