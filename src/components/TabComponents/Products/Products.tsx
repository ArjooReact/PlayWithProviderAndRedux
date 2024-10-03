import React from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'
import { ProductTypes } from './ProductTypes'
import { GLOBAL_PIN,GLOBAL_TOKEN,GLOBAL_USER_NAME } from '../../../storage/KeychainStorage/Keychain'
const Product:React.FC<ProductTypes>=()=>{
return(<SafeAreaView>
<Text>Products</Text>
<Text>{GLOBAL_USER_NAME}</Text>
</SafeAreaView>)
}
export default Product