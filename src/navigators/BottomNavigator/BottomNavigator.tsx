import React,{useEffect} from 'react';
import {BottomNavigatorTypes} from './BottomNavigatorTypes';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getCredentials } from '../../storage/KeychainStorage/Keychain';
const BottomNavigator: React.FC<BottomNavigatorTypes> = ({title}) => {
  const Tab = createBottomTabNavigator();
  useEffect(()=>{
    console.log('GET_CREDDDDDff',JSON.stringify(getCredentials))
   },[])
  return <SafeAreaView></SafeAreaView>;
};

export default BottomNavigator;
