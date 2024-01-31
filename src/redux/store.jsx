import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";

// Reducers
import common from "./reducers/commonSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['common']
}

const persistedCommonReducer = persistReducer(persistConfig, common)

const store = configureStore({
    // Register all reducer you create here
    reducer: {
        persistedCommonReducer
    },
    // TODO: enable this once env is setup
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;

export const persister = persistStore(store)