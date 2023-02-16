import { configureStore } from '@reduxjs/toolkit';
import photoSliceReducer from './photos/photoSlice';

export const store = configureStore({
    reducer: {
        photoStore: photoSliceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
