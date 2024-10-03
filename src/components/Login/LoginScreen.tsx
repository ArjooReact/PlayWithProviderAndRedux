import React,{useEffect, useState} from 'react'
import { LoginScreenTypes } from './LoginScreenType'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,Button,TextInput, View,Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import * as Keychain from 'react-native-keychain';
import { saveDataInLocalStorage,getDataFromLocalStorage } from '../../storage/AsyncStorage/Asyncstorage';
import { GLOBAL_USER_NAME, saveCredentialsUsingKeychain,getCredentials,flushCredentials,getCredentialsUsingKeychain } from '../../storage/KeychainStorage/Keychain';
import { useUserContext } from '../../ContextProvider/contextHooks/useUserContext';
const LoginScreen:React.FC<LoginScreenTypes>=()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [userName,setUserName]=useState('')
    const [passWord,setPassword]=useState('')
    const[loggedIn,setIsLoggedIn]=useState(true)
    const { user, setUser } = useUserContext();
   // const [userName,setUserName]
   const getAsyncStorageData= async()=>{
    let isLogged:any= await getDataFromLocalStorage('IS_LOGGED_IN')
    setIsLoggedIn(isLogged.replaceAll('"',''))
   // setIsLoggedIn(true)
    console.log('ASYNC STORAGE DATAddddffdd:::::',loggedIn)
   }

   const saveLoggedInCredentialsFromAsyncStorage=()=>{
      saveDataInLocalStorage('IS_LOGGED_IN',true)
      saveDataInLocalStorage('TOKEN','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
      saveDataInLocalStorage('USERNAME','Arzoorr')
      saveDataInLocalStorage('PASSWORD','123456')
   }
   

    const doValidation=()=>{
        if(userName===''){
          Alert.alert('Please Enter UserName!!')
        }
        else if(passWord===''){
            Alert.alert('Please Enter Password')
        }
       else{
        setUser({ userName: userName, passWord: passWord });
        console.log('UserName:::',user?.userName)
        saveUserToken(userName,passWord)
        saveLoggedInCredentialsFromAsyncStorage()
        navigation.navigate('DashBoard')
       let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        let token_obj1={
            userName:'arjoo@123',
            pin:'123456',
            passWord:'876543'
        }
        saveCredentialsUsingKeychain(JSON.stringify(token_obj1),token)
       
        //getUserToken()
       }
    }
    const saveUserToken= async(userName:string,passWord:string)=>{
        console.log('SAVE TOKEN::')
        let token_obj={
            token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            pin:'123456',
            passWord:'876543'
        }
        const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        await Keychain.setGenericPassword(userName,JSON.stringify(token_obj))
       // Keychain.setInternetCredentials()
    }

    const getUserToken= async()=>{
        try{
         const credentials=await Keychain.getGenericPassword()
         console.log('TOKEN:::::',credentials)

         if (credentials) {
            console.log(
              'Credentials successfully loaded for user ' + credentials.password
            );
          } else {
            console.log('No credentials stored');
          }
        }catch(error){
         console.log('ERROR:::',error)
        }
    }
    return(<SafeAreaView style={style.mainContainer}>
        <Text>{user?.userName}</Text>
        <Text>{userName}</Text>
       
   <TextInput
   style={style.inputStyles}
   value={userName}
   placeholder='Please Enter UserName'
   placeholderTextColor='gray'
   onChangeText={setUserName}
   >
   </TextInput>
   <TextInput
   style={style.inputStyles}
   value={passWord}
   placeholder='Please Enter PassWord'
   placeholderTextColor='gray'
   onChangeText={setPassword}
   >
   </TextInput>
   <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start',marginLeft:20,
    alignItems:'flex-end',alignContent:'space-between',marginTop:14}}>
   <CheckBox
   style={{width:20,height:20,backgroundColor:'#ffffff',alignSelf:'flex-start'}}
   lineWidth={1}
    disabled={false}
    value={toggleCheckBox}
    boxType='square'
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={{marginLeft:10}}>
    Remember Me
  </Text>
   </View>
  
    <Button
    title='LOGIN'
    onPress={()=>{
    // 
    doValidation()
    console.log('Checkbox Value:::::',toggleCheckBox)

    }}
    ></Button>
    {/* <Button
    title='Get Generic Pwd'
    onPress={()=>{
        getUserToken()  
    }}
    ></Button> */}
    <Button
    title='Set Keychain Data'
    onPress={()=>{
      console.log('Token:::::')
      let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      let token_obj1={
          userName:'arjoo@123',
          pin:'123456',
          passWord:'876543'
      }
      saveCredentialsUsingKeychain(JSON.stringify(token_obj1),token)
    }}
    ></Button>
      <Button
    title='Get KeyChain Data'
    onPress={async ()=>{
     let res= await getCredentialsUsingKeychain()
     setUserName(JSON.parse(JSON.stringify(res)).password)
      console.log('data fetch:::',res)
    }}
    ></Button>
    <Button
    title='Flush KeyChain Data'
    onPress={()=>{
      flushCredentials()
    }}
    ></Button>
    </SafeAreaView>)
}

const style= StyleSheet.create({
    mainContainer:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
     
    },
    inputStyles:{
        width:'90%',
        height:40,
        borderRadius:8,
        borderColor:'blue',
        borderWidth:1,
        marginTop:20
    }

})
export default LoginScreen