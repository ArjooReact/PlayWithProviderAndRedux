import React,{useState} from 'react'
import { StyleSheet,SafeAreaView,Text,Button,View, TextInput } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
//import { firstNameUpdate,lastNameUpdate } from '../../../redux/testRedux/testRedux2'
import { HomeType } from './HomeType'


const Home:React.FC<HomeType>=({title})=>{

const dispatch=useDispatch()

//// Inorder To check Entire State will call this method //
/// But while calling this method will cause re-rendering isssuee///

// const selector= useSelector<string>((state)=>{
//    console.log('Dashboard State:::',state)
//    return state
// })

// Getting firstName from redux store
let firstName= useSelector((state:any)=>{
    return state.loginReducer.userName
})

// Getting last name from redux store
let password= useSelector((state:any)=>{
    return state.loginReducer.passWord
})


return(<SafeAreaView style={styles.mainContainer}>
 <Text>{`FirstName: ${firstName}`}</Text>
 <Text>{`Password: ${password}`}</Text>
<View style={{display:'flex',width:'100%',justifyContent:'center',alignItems:"center"}}>
  
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
    centerContainer:{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:"center"
    },
    buttonContainerView:{
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textInputStyle:{
        width:'90%',
        height:40,
        borderColor:'blue',
        borderWidth:1,
        borderRadius:8,
        marginBottom:20
    }
})
export default Home