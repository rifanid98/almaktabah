import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise-middleware';
import logger from "redux-logger";

// Persist Library
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
// @rnc/async-storage support for web macos and windows
// import { AsyncStorage } from "@react-native-community/async-storage";


/**
 * reducer
 */
import auth from './auth/reducer';
import books from "./books/reducer";
import genres from "./genres/reducer";
import histories from "./histories/reducer";
import authors from "./authors/reducer";
import users from "./users/reducer";
import apps from "./apps/reducer";


// Combine The Reducers
const reducer = combineReducers({
  auth,
  books,
  genres,
  histories,
  authors,
  users,
  apps
})

/**
 * PersistConfig
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    "auth",
    "books",
    "genres",
    "authors",
    "users",
    "apps"
  ]
}

const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * store
 */
export const store = createStore(
  persistedReducer,
  // applyMiddleware(reduxPromise)
  applyMiddleware(reduxPromise, logger)
);

/**
 * dispatcher
 */
export * from './auth/actions';
export * from './books/actions';
export * from './genres/actions';
export * from './histories/actions';
export * from './authors/actions';
export * from './users/actions';
export * from './apps/actions';

/**
 * selector
 */
// export * from './post/selector';
// export * from './profile/selector';