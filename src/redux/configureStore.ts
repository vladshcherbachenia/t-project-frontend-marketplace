import { createStore } from '@reduxjs/toolkit'
import setUserReducer from "./reducers/setUserReducers";

const configureStore = () => {
    return createStore(setUserReducer);
}

export default configureStore;