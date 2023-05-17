import {createStore} from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store =createStore(persistedReducer, {})
export const persistor = persistStore(store);
