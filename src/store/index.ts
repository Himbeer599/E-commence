import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    filter: filterReducer,
  },
});

// 从 store 本身推断 `RootState` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出 dispatch 的类型
export type AppDispatch = typeof store.dispatch;

export default store; 