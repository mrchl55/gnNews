import {createSlice} from "@reduxjs/toolkit";
const initialLangState = {language: 'en'}

const languageSlice = createSlice({
    name: 'language',
    initialState: initialLangState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload
        },

    }
})
export const langActions = languageSlice.actions;

export default languageSlice