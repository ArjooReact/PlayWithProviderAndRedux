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
 
  const state1=useSelector(state=>{
    return state
})
    useEffect(()=>{
         console.log('CALLING FROM PRODUCTS_TAB_COMPONENT')
        
        console.log('IS_FETCHING_FROM_PRODUCTS:::',finalData.isFetching)
        console.log('IS_LOADING_FROM_PRODUCTS::',finalData.isLoading)
      //  console.log('STATE FROM PRODUCTS::::::',state1)
        setIsLoading(finalData.isLoading)
 
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