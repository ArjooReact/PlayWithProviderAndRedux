import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Button,ScrollView} from 'react-native';
import {ProfileType} from './ProfileType';
import {getDataFromLocalStorage,clearAsyncStorage,saveDataInLocalStorage} from '../../../storage/AsyncStorage/Asyncstorage';
import { saveCredentialsUsingKeychain,flushCredentials,getCredentialsUsingKeychain,getCredentials } from '../../../storage/KeychainStorage/Keychain';
import {GLOBAL_USER_NAME} from '../../../storage/KeychainStorage/Keychain';
import {useState, useEffect} from 'react';

const Profile: React.FC<ProfileType> = () => {
  const [userNameAsync, setUserNameAsync] = useState();
  const [tokenAsync, setTokenAsync] = useState();
  const [loggdStatusAsync, setLoggedStatusAsync] = useState();
  const [passWordAsync, setpassWordAsync] = useState();

  const [userNameKeyChain, setUserNameKeyChain] = useState('');
  const [tokenKeyChain, setTokenKeychain] = useState('');
  const [loggdStatusKeyChain, setLoggedStatusKeyChain] = useState(false);
  const [passWordKeyChain, setpassWordKeyChain] = useState('');

  useEffect(()=>{
    getDataFromAsyncStorage()
    saveCredentialsInKeyChainStorage()
  },[])
  const saveLoggedInCredentialsFromAsyncStorage=()=>{
    saveDataInLocalStorage('IS_LOGGED_IN',true)
    saveDataInLocalStorage('TOKEN','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    saveDataInLocalStorage('USERNAME','Arzoorr')
    saveDataInLocalStorage('PASSWORD','123456')
 }
  const getDataFromAsyncStorage = async () => {
    try {
      let userName: any = await getDataFromLocalStorage('USERNAME');
      let token: any = await getDataFromLocalStorage('TOKEN');
      let loggedStatus: any = await getDataFromLocalStorage('IS_LOGGED_IN');
      let passWord:any = await getDataFromLocalStorage('PASSWORD')
      setUserNameAsync(userName);
      setTokenAsync(token);
      setLoggedStatusAsync(loggedStatus);
      setpassWordAsync(passWord)
    } catch (error) {
      console.log('Getting Error While Fetching Data From Async Storage....');
    }
  };


  const saveCredentialsInKeyChainStorage= (async ()=>{
    let userName='Rajveer'
    let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    let server={
        userName:'Rajveer',
        loggedInStatus:false,
        passWord:'876543'
    }
    saveCredentialsUsingKeychain(JSON.stringify(server),token)
    //saveCredentialsUsingKeychain(JSON.stringify(token_obj1),token)
  })

  const getDataFromKeychainStorage= (async()=>{
    try{
    let res= await getCredentialsUsingKeychain()
    let dataObject=JSON.parse(JSON.stringify(res)).username
    let token=JSON.parse(JSON.stringify(res)).password
    let userName=JSON.parse(dataObject).userName
    let passWord=JSON.parse(dataObject).passWord
    let isLoggedInStatus=JSON.parse(dataObject).loggedInStatus
    setUserNameKeyChain(userName)
    setTokenKeychain(token)
    setLoggedStatusKeyChain(isLoggedInStatus)
    setpassWordKeyChain(passWord)

    console.log('Getting KeychainStorage Data:::',token)
    console.log('Getting KeychainStorage Data:::',userName)
    console.log('Getting KeychainStorage Data:::',passWord)
    console.log('Getting KeychainStorage Data:::',isLoggedInStatus)
    }catch(error){
      console.log('Error Parse',error)
    }
  })

  const clearKeychainStorage= ()=>{
    flushCredentials()
    setUserNameKeyChain('')
    setTokenKeychain('')
    setLoggedStatusKeyChain(false)
    setpassWordKeyChain('')
  }
  return (
    <ScrollView>
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={styles.fontStyle}>Data From AsyncStorage</Text>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>UserName :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{userNameAsync}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>TOKEN :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{tokenAsync}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>LOGGEDIN STATUS :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{loggdStatusAsync}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>PASSWORD :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{passWordAsync}</Text>
        </View>
        <Button
        title='Fetch AsyncStorage Data'
        onPress={()=>{
            saveLoggedInCredentialsFromAsyncStorage()
              getDataFromAsyncStorage()
        }}
        ></Button>
         <Button
        title='Clear AsyncStorage Data'
        onPress={()=>{
              clearAsyncStorage()
              getDataFromAsyncStorage()
        }}
        ></Button>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.fontStyle}>Data From KeyChainStorage</Text>
        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>UserName :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{userNameKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>TOKEN :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{tokenKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>LOGGEDIN STATUS :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{loggdStatusKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>PASSWORD :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{passWordKeyChain}</Text>
        </View>
        <Button
        title='Save KeyChainStorage Data'
        onPress={()=>{
          saveCredentialsInKeyChainStorage()
          //getDataFromKeychainStorage()
        }}
        ></Button>
        <Button
        title='Fetch KeyChainStorage Data'
        onPress={async ()=>{
          getDataFromKeychainStorage()
          //console.log('resssss',res)
        }}
        ></Button>
         <Button
        title='Clear KeyChainStorage Data'
        onPress={()=>{
          clearKeychainStorage()
         // getDataFromKeychainStorage()
        }}
        ></Button>
      </View>
      <View style={[styles.secondContainer,styles.thirdContainer]}>
        <Text style={styles.fontStyle}>Data From ContextProvider</Text>
        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>UserName :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{userNameKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>TOKEN :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{tokenKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>LOGGEDIN STATUS :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{loggdStatusKeyChain}</Text>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.fontStyle}>PASSWORD :</Text>
          <Text style={[styles.fontStyle, styles.fontStyle2]}>{passWordKeyChain}</Text>
        </View>
        <Button
        title='Save KeyChainStorage Data'
        onPress={()=>{
          saveCredentialsInKeyChainStorage()
          //getDataFromKeychainStorage()
        }}
        ></Button>
        <Button
        title='Fetch KeyChainStorage Data'
        onPress={async ()=>{
          getDataFromKeychainStorage()
          //console.log('resssss',res)
        }}
        ></Button>
         <Button
        title='Clear KeyChainStorage Data'
        onPress={()=>{
          clearKeychainStorage()
         // getDataFromKeychainStorage()
        }}
        ></Button>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  firstContainer: {
    flex: 0.5,
    width: '96%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 0.5,
    backgroundColor: 'orange',
    width: '96%',
    marginBottom: 10,
    alignItems: 'center',
  },
  thirdContainer:{
   backgroundColor:'lightgray'
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'purple',
    marginTop: 10,
    marginLeft: 10,
  },
  fontStyle2: {
    color: 'green',
    marginLeft: 10,
  },
  textSection: {
    width: '100%',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
  },
});
export default Profile;
