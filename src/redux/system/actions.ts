import { ActionType, createAsyncAction } from "typesafe-actions"
import { System } from "/models/System"

const SYSTEM_REQUEST = "SYSTEM_REQUEST"
const SYSTEM_SUCCESS = "SYSTEM_SUCCESS"
const SYSTEM_ERROR = "SYSTEM_ERROR"

export const getSystem = createAsyncAction(SYSTEM_REQUEST, SYSTEM_SUCCESS, SYSTEM_ERROR)<undefined, System, Error>()

export type SystemAction = ActionType<typeof getSystem>
