import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import ScrollToTop from "./components/reusables/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";


function saveToLocalStorage(state){
  try{
    const serializedState=JSON.stringify(state)
    localStorage.setItem("state",serializedState)
  }catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage(){
  try{
    const serializedState=localStorage.getItem("state")
   if(serializedState===null) return undefined
   return JSON.parse(serializedState)
  }catch(e){
    console.log(e)
    return undefined
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState=loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(()=>saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
