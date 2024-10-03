import * as Keychain from 'react-native-keychain'
export let GLOBAL_USER_NAME=''
export let GLOBAL_PIN=''
export let GLOBAL_TOKEN=''
export const saveCredentialsUsingKeychain= async(token:string,userCredentials:Object)=>{   
    try{
      let credentials=JSON.stringify(userCredentials)
     // await Keychain.setGenericPassword(token,userCredentials.toString().replace(/\//g,""))
      await Keychain.setGenericPassword(token,userCredentials.toString()).then((res)=>{
        console.log('DATA SAVED:::',res)
      })
    }catch(error){
        console.log('Error While Save:',error)
    }
}

export const getCredentialsUsingKeychain= async()=>{
    let  credentials=await Keychain.getGenericPassword()
    console.log('INNER CRED',credentials)
    try{
        if(credentials){
            return credentials
        }else{
            return 'Data Not Stored'
        }
    }catch(error){
        console.log('Error While Fetching Data From Keychain',error)
    }
}

export const getCredentials=async()=>{
    let token_val= await getCredentialsUsingKeychain().then((response)=>{
        console.log('hhhhh',response)
      return response
    })
     console.log('TOOOOOOO',token_val)
    if(token_val){
    let credentialObj=JSON.parse(JSON.stringify(token_val))
    console.log('CREDDUUU',credentialObj)
    }  
    else{
        console.log('KEY CHAIN ACCESS DATA FLUSHED:::::')
    }
}

// export const getCredentials=async()=>{
//     let token_val= await getCredentialsUsingKeychain().then((response)=> {
//         console.log('RAJVEER::::',response)
//         return response})
//     console.log('TOOOOOOO',token_val)
//     if(token_val){
//     let credentialObj=JSON.parse(JSON.stringify(token_val)).username
//     let userName=JSON.stringify(JSON.parse(credentialObj).userName).replaceAll('"','')
//     GLOBAL_USER_NAME=userName
//     GLOBAL_PIN=JSON.stringify(JSON.parse(credentialObj).pin).replaceAll('"','')
//     //GLOBAL_TOKEN=
//     console.log('ARZOO_USER',userName)
//     return userName
//     }else{
//         console.log('INSIDE BLANK DATA FIRST LOGIN......')
//         GLOBAL_USER_NAME=''
//         GLOBAL_PIN=''
//     }
// }

export const flushCredentials= async()=>{
    try{
       await Keychain.resetGenericPassword();
       console.log('DATA FLUSHED SUCCESSFULLY..')
    }catch(error){
        console.log('Error While Flushing Data::::',error)
    }
}
