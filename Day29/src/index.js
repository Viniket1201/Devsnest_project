import React from 'react'
import reactDom from 'react-dom'
import {App} from './App'
import store from './store'
import {Provider} from 'react-redux'
reactDom.render(
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

