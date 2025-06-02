
import {configureStore} from "@reduxjs/toolkit"
import {apiNews} from "./servises/newsApi.js"

export const store = configureStore({
    reducer:{
        [apiNews.reducerPath]: apiNews.reducer,
    },
    middleware:(getDefaultMiddlewire) => 
        getDefaultMiddlewire().concat(apiNews.middleware),
})