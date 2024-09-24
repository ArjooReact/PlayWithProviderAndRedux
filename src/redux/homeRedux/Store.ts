// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// //import { combineReducers } from "@reduxjs/toolkit";
// import homeSliceReducer from "./homeSlice";

// // const combineReducer= combineReducers({
// //    homeSlice:homeSlice
// // })

// export const store=configureStore({
//     reducer:{
//         counter:homeSliceReducer
//     }
// })
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch


import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
//import { pokemonApi } from './services/pokemon'
import { getProductApiCall } from '../../api/GetProductsApi'
import { getProductListingApiCall } from '../../api/GetProductListApi';
import { getAllTypeMasterProduct } from '../../api/GetAllApi';
import homeSliceReducer from "./homeSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [getProductApiCall.reducerPath]: getProductApiCall.reducer,
    [getProductListingApiCall.reducerPath]: getProductListingApiCall.reducer,
    [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
    counter:homeSliceReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductApiCall.middleware).concat(getProductListingApiCall.middleware).concat(getAllTypeMasterProduct.middleware),


//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(getProductApiCall.middleware),
 
  //.concat(getProductApiCall.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
//export type AppDispatch = typeof store.dispatch