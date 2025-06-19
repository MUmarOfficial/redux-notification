import { configureStore } from '@reduxjs/toolkit';
import NotificationReducer from './notificationsSlice';

export const store = configureStore({
    reducer: {
        notifications: NotificationReducer,
       
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

