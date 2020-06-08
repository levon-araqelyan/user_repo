import { all, call, put, takeLatest } from "redux-saga/effects";
import { getSinglUsersRequestSucceed, getUsersRequestSucceed } from "../store/action-creaters/usersActionsCreator";
import { request } from "../services/requestService";
import { USERS_ACTION_TYPES } from "../store/actions/usersActions";

export function* getUsers({ payload }) {

  try {
    const { searchedUsers, page } = payload;
    const { data } = yield call(request, "GET", `https://api.github.com/search/users?q=${searchedUsers}+in&per_page=20&page=${page}`, {});

    yield put(getUsersRequestSucceed(data));
  } catch (error) {
    // yield exceptionHandlerService(error, apiCollections.exitNoteLink);
  }
}

function* getSingleUser(action) {

  try {
    const { login } = action.payload;
    const { data } = yield call(request, "GET", `https://api.github.com/users/${login}`, {});

    yield put(getSinglUsersRequestSucceed(data));
  } catch (e) {
    console.log(e);
  }
}

export function* usersSagas() {
  yield all([takeLatest(USERS_ACTION_TYPES.USERS_GET_REQUEST, getUsers), takeLatest(USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST, getSingleUser)]);
}
