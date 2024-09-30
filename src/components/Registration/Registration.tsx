import React,{useEffect} from 'react'
import { StyleSheet,SafeAreaView,Text} from 'react-native'
import { RegistrationType } from './RegistrationType'
import { useGetDataQuery,useGetDataByIdQuery } from '../../api/GetAllApi'

const Registration:React.FC<RegistrationType>=({title})=>{
    const {data, isLoading, isFetching} = useGetDataQuery('',{ refetchOnMountOrArgChange: true });
    useEffect(()=>{
      console.log('CALLING_FROM_REGISTRATION_SCREEN')
      console.log('IS_FETCHING_FROM_REGISTRATION:::',isFetching)
      console.log('IS_LOADING_FROM_REGISTRATION::',isLoading)
    },[])
    return(<SafeAreaView style={styles.mainContainer}>
      <Text>Welcome To Registration Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>)
}
const styles= StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    }
})

export default Registration