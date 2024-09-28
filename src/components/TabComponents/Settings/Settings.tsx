import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { StyleSheet,SafeAreaView,Text,Button} from 'react-native'
import { SettingsTypes } from './SettingsTypes'
import { updateLoggedInStatus } from '../../../redux/homeRedux/loginSlice';
import { getDataFromLocalStorage } from '../../../utils/localStorage'
import { useLoginContext } from '../../../ContextProvider/contextHooks/useLoginContext'
let token:any=''

const Settings:React.FC<SettingsTypes>=()=>{
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {loggedIn, setIsLoggedIn}= useLoginContext()
  let dispatch = useDispatch();
  useEffect(()=>{
    console.log('CALLING FROM SETTINGS_TAB_COMPONENT')
    //getToken()
  },[])
  const getToken=async()=>{
     token=await getDataFromLocalStorage('TOKEN')
    return token
  }
 
    let asyncData = useSelector((state:any)=>{
        return state.userCredentials
      })
return(<SafeAreaView>
<Text>Welcome To Settings</Text>
<Text>{JSON.stringify(loggedIn?.isLoggedIn)}</Text>
<Text>{JSON.stringify(asyncData.userData.userName)}</Text>
<Text>is Logged In Status: {JSON.stringify(asyncData.userData.isLoggedIn)}</Text>
<Button
title='LOGOUT'
onPress={()=>{
  dispatch(updateLoggedInStatus(false))
  navigation.navigate('LoginScreen')
}}
></Button>
</SafeAreaView>)
}

export default Settings