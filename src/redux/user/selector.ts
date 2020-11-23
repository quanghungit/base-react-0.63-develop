import { AppState } from "/redux"
import { User } from "/models/User"
import { AppReducerType } from "/redux/reducers"

export const userSelector = (state: AppState): User => state[AppReducerType.USER] as User
