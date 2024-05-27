import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";

// Reducers
import common from "./reducers/commonSlice";
import post from "./reducers/postSlice";
import isDarkMode from "./reducers/colorThemeSlice";
import contactForm from "./reducers/contactFormSlice";

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['common'], // FIXME: find out why this is not working
}

const rootReducer = combineReducers({ 
    common,
    post,
    isDarkMode,
    contactForm
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // Register all reducer you create here
    reducer: {
        persistedReducer
    },
    // TODO: enable this once env is setup
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // shut the serializable check
      }).concat(thunk)
});

// export store;

export const persister = persistStore(store) 