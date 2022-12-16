import { configureStore } from '@reduxjs/toolkit';
import globalSlice  from 'state';
import globalReducers from 'state'
import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from 'state/api'
export const store = configureStore({
  reducer: {
   globalState:globalReducers,
   [api.reducerPath]:api.reducer
  
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(api.middleware)
 
});
setupListeners(store.dispatch)