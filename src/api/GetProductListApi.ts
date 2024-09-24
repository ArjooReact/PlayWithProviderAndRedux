import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getProductListingApiCall = createApi({
    reducerPath: 'productListingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
      getProductByListing: builder.query<string,void>({
        query: () => `products`,
      }),
    }),
  })

  //export const { useGetPokemonByNameQuery } = getProductApiCall
  export const { useGetProductByListingQuery }= getProductListingApiCall