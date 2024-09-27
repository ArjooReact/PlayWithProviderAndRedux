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


import { configureStore,combineReducers } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
//import { pokemonApi } from './services/pokemon'
import { getProductApiCall } from '../../api/GetProductsApi'
import { getProductListingApiCall } from '../../api/GetProductListApi';
import { getAllTypeMasterProduct } from '../../api/GetAllApi';
import { getLogingApiCall } from '../../api/GetLoginApi';
import homeSliceReducer from "./homeSlice";
import loginSliceReducer from './loginSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistReducer, persistStore } from 'redux-persist';
//import { persistStore } from 'redux-persist';
import { persistedReducer } from '../reduxPersisits/authPersistsConfig';
export const rootReducer= combineReducers({
 // reducer: {
    // Add the generated reducer as a specific top-level slice
    [getProductApiCall.reducerPath]: getProductApiCall.reducer,
    [getProductListingApiCall.reducerPath]: getProductListingApiCall.reducer,
    [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
    [getLogingApiCall.reducerPath]: getLogingApiCall.reducer,
    counter:homeSliceReducer,
    userCredentials:loginSliceReducer
  //},
})

////// PART-1 WITH PERSIST REDUCER ///////////////
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(getProductApiCall.middleware).concat(getProductListingApiCall.middleware).concat(getAllTypeMasterProduct.middleware).concat(getLogingApiCall.middleware),
  
})

/////// PART-2 WITHOUT PERSIST REDUCER //////////////////
/// Middleware and ConfigureStore without combined store
// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [getProductApiCall.reducerPath]: getProductApiCall.reducer,
//     [getProductListingApiCall.reducerPath]: getProductListingApiCall.reducer,
//     [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
//     [getLogingApiCall.reducerPath]: getLogingApiCall.reducer,
//     counter:homeSliceReducer,
//     userCredentials:loginSliceReducer
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(getProductApiCall.middleware).concat(getProductListingApiCall.middleware).concat(getAllTypeMasterProduct.middleware).concat(getLogingApiCall.middleware),

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
//export type AppDispatch = typeof store.dispatch
