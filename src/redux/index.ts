import { StateType } from "typesafe-actions"
import reducers from "./reducers"
import { SystemAction } from "./system/actions"
import { UserAction } from "./user/action"

export type AppState = StateType<typeof reducers>
export type AppAction = UserAction | SystemAction
