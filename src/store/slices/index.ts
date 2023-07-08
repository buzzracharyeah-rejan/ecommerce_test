import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './global.slice';
import cartReducer from './cart.slice';

export const rootReducer = combineReducers({ global: globalReducer, cart: cartReducer });
