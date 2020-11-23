import { all, call, put, takeLatest } from "redux-saga/effects"

import * as authApi from "/apis/auth"
import { System } from "/models/System"

import { getSystem } from "./actions"

export function* systemSaga() {
  try {
    const system: System = yield call(authApi.getSystem)

    if (system) {
      yield put(getSystem.success(system))
    }
  } catch (error) {
    yield put(getSystem.failure(error))
  }
}

function* watchGetSystem() {
  yield takeLatest(getSystem.request, systemSaga)
}

export default function* systemSagas() {
  yield all([watchGetSystem()])
}
