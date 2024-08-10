import {configureStore} from '@reduxjs/toolkit';
import courterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: courterReducer
    }
}) 