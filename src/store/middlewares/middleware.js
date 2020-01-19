import { call, all } from "redux-saga/effects";
import { usersSagas } from "../../Saga/usersSaga";
import { reposSagas } from "../../Saga/reposSaga";

export default function* middleware() {
  yield all([call(usersSagas), call(reposSagas)]);
}
