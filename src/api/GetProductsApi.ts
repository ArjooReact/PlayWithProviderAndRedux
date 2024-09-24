import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import type {Pokemon} from './types'

// export const getProductApiCall= createApi({
//     reducerPath:'getProductApi',
//     baseQuery: fetchBaseQuery({baseUrl:''},
//     endpoints: builder=>({
//         getData:builder
//     })    
//     )
// })

export const getProductApiCall = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })

  export const { useGetPokemonByNameQuery } = getProductApiCall