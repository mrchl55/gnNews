import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import {Provider} from "react-redux";

const storeSubscriber = () => {
    console.log(store.getState())
}
store.subscribe(storeSubscriber)
store.dispatch({
    type: 'increment'
})
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

reportWebVitals();
