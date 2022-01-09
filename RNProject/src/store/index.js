import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import ReduxThunk from 'redux-thunk';
import http, { server } from "../utils/http";
import localStorage from "../utils/localStorage";
import authReducer from "./auth/auth.reducer";
import optionsReducer from "./options/options.reducer";

const reduxProps = {
   api: http,
   server: server,
   cacheStore: localStorage,
   new: 1,
}
const rootReducer = combineReducers({
   auth: authReducer,
   options: optionsReducer,
})
const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
   whitelist: ['auth', 'cart', 'shop', 'location', 'checkout', 'config']
}
export const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk.withExtraArgument(reduxProps, reduxProps)));
export const persistor = persistStore(store)

export default store;
