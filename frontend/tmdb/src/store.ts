// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // 예시 slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;