import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


import productSlice from './features/product-slice';
import cartSlice from './features/cart-slice';
import  wishlistSlice from './features/wishlist-slice';


const persistConfig = {
  key:'root',
  storage:AsyncStorage,
  version:1,
  blacklist:['products']
}


const rootReducer = combineReducers({
  products:productSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
})