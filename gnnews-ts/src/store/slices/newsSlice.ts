import {createSlice} from "@reduxjs/toolkit";

const initialState = {currentView: 'list', articlesDisplayed: 0}

const newsSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        switchView(state) {
            state.currentView = state.currentView == 'list' ? 'tiles' : 'list';
        },
        setArticlesDisplayed(state, action) {
            state.articlesDisplayed = action.payload
        }
    }
})
export const newsActions = newsSlice.actions;
export default newsSlice