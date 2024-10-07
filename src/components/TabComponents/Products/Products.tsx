import React from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'
import {useSelector} from 'react-redux'
import { ProductTypes } from './ProductTypes'
const Product:React.FC<ProductTypes>=()=>{
    let firstName=useSelector((state:any)=>{
        return state.testReducer2.firstName
    })
return(<SafeAreaView>
<Text>{firstName}</Text>
<Text></Text>
</SafeAreaView>)
}
export default Product