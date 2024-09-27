import React,{useState,useEffect} from 'react'
import { LoginScreenTypes } from './LoginScreenType'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,Button,TextInput, View,Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useUserContext } from '../../ContextProvider/contextHooks/useUserContext';
import { useLoginContext } from '../../ContextProvider/contextHooks/useLoginContext';
import { updateUserName,updateUserPassword } from '../../redux/homeRedux/loginSlice';
import { useDispatch, useSelector} from 'react-redux';
import { useGetLoginPostMutation } from '../../api/GetLoginApi';
import { saveDataInLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage';
import * as Progress from 'react-native-progress';
// Important Link for
//https://dummyjson.com/docs/auth
const LoginScreen:React.FC<LoginScreenTypes>=()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [userName,setUserName]=useState('')
    const [passWord,setPassword]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const { user, setUser } = useUserContext();
   const {loggedIn, setIsLoggedIn}= useLoginContext()
    var isLoggedIn:any=''
    const [createUser] = useGetLoginPostMutation()
    let dispatch = useDispatch();

    useEffect(()=>{
      checkIsLoggedIn()
      console.log('is_logged_in_effect:::',isLoggedIn)
      console.log('loggedIn trueddd',loggedIn?.isLoggedIn)

      // condition with contextApi
      if(loggedIn?.isLoggedIn=='true'){
        console.log('loggedIn true')
        navigation.navigate('DashBoard')
      }
     // condition with AsyncStorage
     if(isLoggedIn=='"true1"'){
      console.log('loggedIn From Async::',isLoggedIn)
      navigation.navigate('DashBoard')
    }
      
    },[])
    const checkIsLoggedIn= async()=>{
      isLoggedIn= await getDataFromLocalStorage('ISLOGGEDIN')
      //console.log('REMEMBER_ME',isLoggedIn)
      if(isLoggedIn=='true'){
        console.log('inside true condition')
        navigation.navigate('DashBoard')
      }
      return isLoggedIn
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
        setIsLoading(true)
        console.log('UserName:::',user?.userName)
        dispatch(updateUserName(userName))
        dispatch(updateUserPassword(passWord))
        createUser({
            "username": "emilys",
            "password": "emilyspass"
            // expiresInMins: 60, // optional
          }).unwrap().then((response)=>{
            console.log('LOGIN_RESPONSEcccc:::::::',response.accessToken)
            saveDataInLocalStorage('TOKEN',response.accessToken)
            saveDataInLocalStorage('ISLOGGEDIN',"true1")
            console.log('loggedIn From Async2::',isLoggedIn)
            setIsLoggedIn({isLoggedIn:'false'})
            setIsLoading(false)
          }).catch((error)=>{
             console.log('ERROR:::::',error)
          })

        navigation.navigate('DashBoard')
       
      }
    }
    return(<SafeAreaView style={style.mainContainer}>
        {isLoading? (    <Progress.Circle size={30} indeterminate={true}/>):(null)}
     
        <Text>{user?.userName}</Text>
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