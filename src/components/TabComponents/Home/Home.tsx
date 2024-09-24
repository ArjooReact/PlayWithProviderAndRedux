import React,{useState} from 'react'
import { StyleSheet,SafeAreaView,Text,Button,View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import { HomeType } from './HomeType'
import { useUserContext } from '../../../ContextProvider/contextHooks/useUserContext'
import { RootState } from '../../../redux/homeRedux/Store'
import { increament,decreament } from '../../../redux/homeRedux/homeSlice'
const Home:React.FC<HomeType>=({title})=>{
    const dispatch=useDispatch()
    const data= useSelector((state:RootState)=>{
        return state.counter.value
    })
    const state1=useSelector(state=>{
        return state
    })
    //console.log('WholeState:::',state1)
    //const { user, setUser } = useUserContext();
    const [count,setCount]=useState(0)
return(<SafeAreaView style={styles.mainContainer}>
{/* <Text>{user?.userName}</Text> */}
<Text>{1}</Text>
<View style={styles.buttonContainerView}>
    <Button
    title='Inc'
    onPress={()=>{
       // setCount(count+1)
       //console.log('clicked:::',data)
        dispatch(increament())
    }}
    ></Button>
    <Text>{data}</Text>
    {/* <Text>{1}</Text> */}
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