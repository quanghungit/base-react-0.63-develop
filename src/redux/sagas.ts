import { all } from "redux-saga/effects"
import { systemSaga } from "./system/sagas"
import userSagas from "./user/saga"

export default function* rootSaga() {
  yield all([userSagas(), systemSaga()])
}
