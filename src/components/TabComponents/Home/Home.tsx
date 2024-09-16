import React from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'
import { HomeType } from './HomeType'

const Home:React.FC<HomeType>=({title})=>{
return(<SafeAreaView>
<Text>HOME</Text>
</SafeAreaView>)
}

export default Home