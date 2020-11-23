import { createReducer } from "typesafe-actions"

import { System } from "/models/System"
import { ReduxState, ReduxStateType } from "/redux/types"

import { getSystem } from "./actions"

const INITIAL_STATE: ReduxState<System> = {
  state: ReduxStateType.INIT,
}

const systemReducer = createReducer(INITIAL_STATE)
  .handleAction(getSystem.request, (state: System) => ({
    ...state,
    state: ReduxStateType.LOADING,
  }))
  .handleAction(getSystem.success, (state: System, action: any) => ({
    ...state,
    ...action.payload,
    state: ReduxStateType.LOADED,
  }))
  .handleAction(getSystem.failure, (state: System, action: any) => ({
    ...state,
    error: action.payload,
    state: ReduxStateType.ERROR,
  }))

export default systemReducer
