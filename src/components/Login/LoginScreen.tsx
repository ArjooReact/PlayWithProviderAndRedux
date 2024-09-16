import React,{useState} from 'react'
import { LoginScreenTypes } from './LoginScreenType'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,Button,TextInput, View,Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
const LoginScreen:React.FC<LoginScreenTypes>=()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [userName,setUserName]=useState('')
    const [passWord,setPassword]=useState('')
    const doValidation=()=>{
        if(userName===''){
          Alert.alert('Please Enter UserName!!')
        }
        else if(passWord===''){
            Alert.alert('Please Enter Password')
        }
       else{
        navigation.navigate('DashBoard')
       }
    }
    return(<SafeAreaView style={style.mainContainer}>
        <Text>LogIn</Text>
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