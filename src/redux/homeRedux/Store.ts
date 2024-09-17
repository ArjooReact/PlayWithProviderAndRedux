import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { combineReducers } from "@reduxjs/toolkit";
import homeSliceReducer from "./homeSlice";

// const combineReducer= combineReducers({
//    homeSlice:homeSlice
// })

export const store=configureStore({
    reducer:{
        counter:homeSliceReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch