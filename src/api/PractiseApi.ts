import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//// BASIC FORMAT OF CREATE API SLICE  ////////////////
//import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductType {
  status: string;
  message: string;
}
export const getCrudApi = createApi({
  reducerPath: 'getCrudApi',
  tagTypes:[],
  baseQuery: fetchBaseQuery({}),
  endpoints: builder => ({}),
});

export const {} = getCrudApi;

//////////////////// STEP 2 Withs Explanation of Genric arguments ////////////
//// builder.query<arg1,arg2> accepts two genric arguments
////arg1=> return argument, arg2=> input argument like(id,data..etc)
/// in case 1 products arg2=> should be void because it won't take any i/p args but
///// in second case 2 product its arg2 should be string bcoz it takes id as input args
/////arg1=> type coming from response i.e we can say list of array type

export const getAllApiPost = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({baseUrl: 'https//'}),
  endpoints: builder => ({
    products: builder.query<ProductType[], void>({
      query: () => '/contacts',
    }),
    product: builder.query<ProductType, string>({
      query: id => `/contacts/${id}`,
    }),
  }),
});
export const {useProductsQuery} = getAllApiPost;

//////////// STEP 3 FOR Mutation Query ////////
//mitation query is used to manipulate data in server like add,delete and update data

///Mutations are used to send data updates to the server and apply the changes to the local cache.
//Mutations can also invalidate cached data and force re-fetches.
// here in builder.mutation two args arg1=> void because we donst expect any response from there 

// CONCEPT OF AUTOMATED-RE-FETCHING ///
/// Automated Refetching is basically used during auto fetching of data let us suppose
//we create a POST Call adding new product to server and cannot able to see this new product
//in Product Listing page ByDefault i.e auto-refresh of page we have to refresh the component
//by calling  refetch() from const { data, refetch } = useGetPostsQuery({ count: 5 })
//So in order to avoid this concept of Automated-Re-Fetching comes into picture
// for that will have to add oneMore json entitiy inside createApi called tagTypes['tag1','tag2,...'tagn']
//Inside tagTypes array we could provide multiple tags
//Step2=> Provide provideTags['tag1'] inside endpoints functions json entity LetUu suppose 
//will have to call list of Api after POST Call so will have to provide a provideTag['tag1']
//inside createProductList  and also provide invalidateTags['tag1','tag2'] inside POST call method
//json entity addProduct after post call what ever api we want to call will set inside
//validateTags['',''] it will call all provideTags[''] accordingly no need to call refetch()..
export const getAllProduct = createApi({
  reducerPath: 'getAllProduct',
  tagTypes:['test'],
  baseQuery: fetchBaseQuery({baseUrl: ''}),
  endpoints: builder => ({
    createProductList:builder.query<ProductType[],void>({
      query:()=>({
        url:'/products',
        method:'GET'
      }),
     providesTags:['test']
    }),

    addProduct: builder.mutation<void, ProductType>({
        query: product=>({
            url:'',
            method:'POST',
            body: product
        }),
        invalidatesTags:['test']        
    }),
    deleteProduct: builder.mutation<void,string>({
        query: (id)=>({
            url:`/contacts/${id}`,
            method:'DELETE'
        })

  }),
   updateProduct: builder.mutation<void,ProductType>({
      query:(id,...rest)=>({
        url:'',
        method:'PUT',
        body: rest
      })
   })
})
});

//will have to add mutation at last instead of query in hooks.
export const {useAddProductMutation,useDeleteProductMutation,useUpdateProductMutation}=getAllProduct

