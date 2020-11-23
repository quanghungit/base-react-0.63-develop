import { AppState } from "./"
import { applyMiddleware, createStore } from "redux"
import { persistReducer, PersistConfig, persistStore, createTransform } from "redux-persist"
import reducers, { AppReducerType } from "./reducers"
import AsyncStorage from "@react-native-community/async-storage"
import middlewares, { setupMiddleware } from "./middlewarer"
import { ReduxStateType } from "./types"
import { setAccessToken } from "/apis/request"

export const persistOptions: PersistConfig<AppState> = {
  key: "root",
  version: 0,
  storage: AsyncStorage,
  whitelist: [AppReducerType.USER],
  transforms: [
    createTransform(
      (states) => {
        return { ...states, state: ReduxStateType.INIT, error: undefined }
      },
      (states) => {
        if (states && states.token) {
          setAccessToken(states.token)
        }

        return states
      },
    ),
  ],
}
const persistedReducer = persistReducer(persistOptions, reducers)

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

setupMiddleware()

export { store, persistor }
