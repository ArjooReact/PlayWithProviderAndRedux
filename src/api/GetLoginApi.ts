import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getLogingApiCall = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
    //   getProductByListing: builder.query<string,void>({
    //     query: () => `products`,
    //   }),

      getLoginPost:builder.mutation({
        query: data=>({
          url:'auth/login',
          method:'post',
          body:data
        })
      })
    }),
   
  })

  //export const { useGetPokemonByNameQuery } = getProductApiCall
  export const {useGetLoginPostMutation }= getLogingApiCall