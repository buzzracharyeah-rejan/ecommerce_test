import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './global.slice';

export const rootReducer = combineReducers({ global: globalReducer });
