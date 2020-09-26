import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
