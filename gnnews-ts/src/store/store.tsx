import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import languageSlice from "./slices/languageSlice";
import newsSlice from "./slices/newsSlice";


const store = configureStore({
    reducer: {news: newsSlice.reducer, language: languageSlice.reducer}
})



export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
