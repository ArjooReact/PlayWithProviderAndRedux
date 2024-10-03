import React from 'react'
import { StyleSheet,SafeAreaView,Text,Button} from 'react-native'
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SettingsTypes } from './SettingsTypes'
import { flushCredentials } from '../../../storage/KeychainStorage/Keychain'
const Settings:React.FC<SettingsTypes>=()=>{
    const navigation: NavigationProp<ParamListBase> = useNavigation();
return(<SafeAreaView>
<Text>Welcome To Settings</Text>
<Button
title='Flush Credentials'
onPress={()=>{
    flushCredentials()
    navigation.navigate('LoginScreen')
}}
></Button>
</SafeAreaView>)
}

export default Settings