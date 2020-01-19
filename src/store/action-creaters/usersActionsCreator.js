import { USERS_ACTION_TYPES } from "../actions/usersActions";

export function getUsersRequest(searchedUsers, page) {
  return { type: USERS_ACTION_TYPES.USERS_GET_REQUEST, payload: { searchedUsers, page } };
}

export function getUsersRequestSucceed(users) {
  return { type: USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS, payload: { users } };
}

export function getSinglUsersRequest(login) {
  return {
    type: USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST,
    payload: { login }
  };
}

export function getSinglUsersRequestSucceed(user) {
  return { type: USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS, payload: { user } };
}
