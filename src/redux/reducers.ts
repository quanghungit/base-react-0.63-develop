import { combineReducers } from "redux"
import systemReducer from "./system/reducer"
import userReducer from "./user/reducer"

export enum AppReducerType {
  USER = "user",
  SYSTEM = "System",
}

const reducers = combineReducers({
  [AppReducerType.USER]: userReducer,
  [AppReducerType.SYSTEM]: systemReducer,
})

export default reducers
