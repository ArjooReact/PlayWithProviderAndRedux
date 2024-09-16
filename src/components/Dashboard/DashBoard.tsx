import React from 'react'
import { DashBoardTypes } from './DashBoardType'
import { StyleSheet,SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../TabComponents/Home/Home'
import Settings from '../TabComponents/Settings/Settings'
import Product from '../TabComponents/Products/Products'
import Profile from '../TabComponents/Profile/Profile'
const DashBoard:React.FC<DashBoardTypes>=()=>{
   const Tab=createBottomTabNavigator()
   return<Tab.Navigator>
   {/* <Tab.Screen name="Screen1" component={TabScreen1} options={{headerShown:false}}>
   </Tab.Screen> */}
   <Tab.Screen name="Home" component={Home} options={{headerShown:false}}>
   </Tab.Screen>
   <Tab.Screen name="Product" component={Product} options={{headerShown:false}}>
   </Tab.Screen>

   <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}>
   </Tab.Screen>
   <Tab.Screen name="Settings" component={Settings} options={{headerShown:false}}>
   </Tab.Screen>
</Tab.Navigator>
}

export default DashBoard