import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formsSlice from './forms/slice';

export const store = configureStore({
  reducer: { forms: formsSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
