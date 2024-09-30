import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";

export interface Product{
    id:number,
    name:string,
    productId:string,
    productDescription:string
}

export const getAllProductDetails=createApi({
    reducerPath:'getAllProductDetails',
    tagTypes:["hello","userID"],
    baseQuery:fetchBaseQuery({baseUrl:''}),
    endpoints: builder=>({
        products:builder.query<Product[],void>({
            query:()=>({
                url:'/products',
                method:'GET'
            }),
            providesTags:["hello"]
        }),
        product:builder.query<Product,string>({
            query:(id)=>({
                url:`products/${id}`,
                method:'GET'
            }),
            providesTags:["userID"]
        }),
        productAdd:builder.mutation<void,Product>({
          query: product=>({
            url:'/products',
            method:'POST',
            body:product
          }),
          // If we want to update call multiple Api after POST Api
          invalidatesTags:["hello","userID"]  
        }),
        productUpdate: builder.mutation<void,Product>({
            query:(id,...rest)=>({
                url:`/products/${id}`,
                method:'PUT',
                body:rest
            })
        }),
        productDelete: builder.mutation<void,string>({
            query: id=>({
                url:`/products/${id}`,
                method:'DELETE',
            })
        }) 
    })
})

export const {useProductsQuery,
    useProductQuery,
    useProductAddMutation,
    useProductDeleteMutation,
    useProductUpdateMutation}=getAllProductDetails