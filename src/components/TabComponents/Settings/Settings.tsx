import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet,SafeAreaView,Text} from 'react-native'
import { SettingsTypes } from './SettingsTypes'
import { getDataFromLocalStorage } from '../../../utils/localStorage'
import { useLoginContext } from '../../../ContextProvider/contextHooks/useLoginContext'
let token:any=''
const Settings:React.FC<SettingsTypes>=()=>{
  const {loggedIn, setIsLoggedIn}= useLoginContext()
  useEffect(()=>{
    getToken()
  },[])
  const getToken=async()=>{
     token=await getDataFromLocalStorage('TOKEN')
    console.log('AccessTokenSettingscc:::',token)
    return token
  }
 
    let asyncData = useSelector((state:any)=>{
        return state.userCredentials
      })
      console.log('Credentials::::',token)
return(<SafeAreaView>
<Text>Welcome To Settings</Text>
<Text>{JSON.stringify(loggedIn?.isLoggedIn)}</Text>
<Text>{token}</Text>
</SafeAreaView>)
}

export default Settings