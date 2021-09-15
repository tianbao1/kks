import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import TodoList from './todoList';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
 
const APP = (
  <Provider store={store}>
     <TodoList />
  </Provider>
)

ReactDOM.render(
  APP,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
