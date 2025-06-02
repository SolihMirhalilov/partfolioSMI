
import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiNews = createApi({
    reducerPath:'apiNews',
    baseQuery:fetchBaseQuery({baseUrl:"https://newsapi.org/v2/"}),
    endpoints:(builder)=>({
        getHotNews:builder.query({
            query:() => 'top-headlines?country=us&category=business&apiKey=867a3402ada242f4bc6a3cfdcd13f522',
        }),
        getLestesNews:builder.query({
            query:() => 'everything?domains=wsj.com&apiKey=867a3402ada242f4bc6a3cfdcd13f522',
        })
    })
})
export const {useGetHotNewsQuery , useGetLestesNewsQuery } = apiNews;
