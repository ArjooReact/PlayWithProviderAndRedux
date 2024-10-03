import React,{useState,useEffect} from 'react'
import { StyleSheet,SafeAreaView,Text,Button,View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { HomeType } from './HomeType'
import { useUserContext } from '../../../ContextProvider/contextHooks/useUserContext'
import { RootState } from '../../../redux/homeRedux/Store'
import { increament,decreament } from '../../../redux/homeRedux/homeSlice'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { saveCredentialsUsingKeychain,getCredentialsUsingKeychain } from '../../../storage/KeychainStorage/Keychain'
import * as Keychain from 'react-native-keychain';
import { getCredentials } from '../../../storage/KeychainStorage/Keychain'
import { GLOBAL_USER_NAME } from '../../../storage/KeychainStorage/Keychain'
import { useFocusEffect } from '@react-navigation/native';
import { getDataFromLocalStorage,clearAsyncStorage } from '../../../storage/AsyncStorage/Asyncstorage'
// export let GLOBAL_USER_NAME=''
// export let GLOBAL_PIN=''
// export let GLOBAL_TOKEN=''
const Home:React.FC<HomeType>=({title})=>{
    const [tokenData,setTokenData]=useState<any>()
    const[loggedIn,setIsLoggedIn]=useState(false)
    const[userName,setUserName]=useState('')
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    let token_val:any
    const dispatch=useDispatch()
    const data= useSelector((state:RootState)=>{
        return state.counter.value
    })
    const { user, setUser } = useUserContext();
    const [count,setCount]=useState(0)
    const[dataObj,setDataObj]=useState({})
    
    const getAsyncStorageData= async()=>{
       let userName:any= await getDataFromLocalStorage('USERNAME')
        console.log('ASYNC USERNAME:::',userName)
        setUserName(userName.replaceAll('"',''))
       }
    useFocusEffect(
        React.useCallback(() => {
          //Do something when the screen is focused
          getAsyncStorageData()
          return () => {
             // Do something when the screen is unfocused
            //Useful for cleanup functions
          };
        }, []))
  
return(<SafeAreaView style={styles.mainContainer}>
<Text>{user?.userName}</Text>
<Text>{`Welcome ${userName}`}</Text>
<View style={styles.buttonContainerView}>
    <Button
    title='Inc'
    onPress={()=>{
       // setCount(count+1)
       console.log('clicked:::',data)
        dispatch(increament())
    }}
    ></Button>
    <Text>{data}</Text>
    <Button
    title='Dec'
    onPress={()=>{
        //setCount(count-1)
        console.log('clicked:::',data)
        dispatch(decreament())
    }}
    ></Button>
</View>
<View>
<Text>{loggedIn}</Text>

<Button
title='Clear Async Storage'
onPress={()=>{
 clearAsyncStorage()
 navigation.navigate('LoginScreen') 
}}
></Button>
</View>
</SafeAreaView>)
}

const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainerView:{
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Home