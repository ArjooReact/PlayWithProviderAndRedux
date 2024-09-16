import React from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'
import { ProductTypes } from './ProductTypes'
const Product:React.FC<ProductTypes>=()=>{
return(<SafeAreaView>
<Text>Products</Text>
</SafeAreaView>)
}
export default Product