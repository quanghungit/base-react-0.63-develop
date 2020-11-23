import { System } from "/models"
import { AppState } from "/redux"
import { AppReducerType } from "/redux/reducers"

export const systemSelector = (state: AppState): System => state[AppReducerType.SYSTEM]
