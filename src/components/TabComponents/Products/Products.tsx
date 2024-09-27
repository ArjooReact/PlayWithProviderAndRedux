import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { StyleSheet,SafeAreaView,Text, View} from 'react-native'
import { ProductTypes } from './ProductTypes'
import * as Progress from 'react-native-progress';
//import { useGetPokemonByNameQuery } from './services/pokemon'
import { useGetPokemonByNameQuery } from '../../../api/GetProductsApi'
import { useGetProductByListingQuery } from '../../../api/GetProductListApi'
import { useGetDataQuery,useGetDataByIdQuery} from '../../../api/GetAllApi'
const Product:React.FC<ProductTypes>=()=>{
    //const { data, error, isLoading } = useGetPokemonByNameQuery('')
    //const { data, error, isLoading } = useGetProductByListingQuery()

  const pokemomresult = useGetPokemonByNameQuery('');
  const productListing = useGetProductByListingQuery();
  const final = useGetDataQuery('')
  const finalData=useGetDataByIdQuery('1')
  const [isLoading,setIsLoading]=useState(true)
  //let res
  // const getFinalData= async ()=>{
  //   let res= await useGetDataByIdQuery('1')
  //   return res
  // }
  const state1=useSelector(state=>{
    //let arrr=state.pokemonApi.queries.results[0]
    //console.log('ARRRAYY:::::',arrr)
    return state
})
    useEffect(()=>{
        //console.log('GetProduct:mmm:::',productListing.data)
        // if(final.isLoading){
        //   console.log('Loading:mmm:final::',final.data)
        // }
       // console.log('Loading:mmm:final2666::',finalData)
     console.log('STATE FROM PRODUCTS::::::',state1)
     console.log('LENGTH OF ARRAY::::',state1)
        setIsLoading(finalData.isLoading)
      console.log('Loading:mmm:final::',final.data)
 
    },[])
   
    
return(<SafeAreaView style={styles.mainContainer}>
 
  {finalData.isFetching?(
    <Progress.Circle size={30} indeterminate={true}/>
):(null)}
 
 <Text>{JSON.stringify(finalData.data)}</Text> 
</SafeAreaView>)
}
const styles= StyleSheet.create({
  mainContainer:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  }
})
export default Product