import { List, Map } from "immutable";
import { USERS_ACTION_TYPES } from "../actions/usersActions";
import { clearList } from "../actions/clearList";

const x = Map({ l: 30, g: 31 }).toObject();
const y = x;
console.log(x === y);

const initialState = {
  users: {
    total_count: 0,
    items: []
  },
  singleUser: {},
  resultsFlag: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS: {
      const tempState = { ...state };

      tempState.users = { ...payload.users };

      return tempState;
    }
    case clearList: {
      const tempState = { ...state };
      tempState.users = { ...tempState.users };
      tempState.users.items = [...tempState.users.items];
      tempState.users.items = [];
      tempState.users.total_count = "";
      tempState.resultsFlag = false;
      return tempState;
    }
    case USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS: {
      const tempState = { ...state };
      tempState.resultsFlag = true;
      tempState.singleUser = { ...tempState.singleUser };
      tempState.singleUser = { ...payload.user };
      tempState.users = { ...tempState.users };
      tempState.users.items = [...tempState.users.items];
      tempState.users.items = [];
      tempState.users.total_count = 0;

      return tempState;
    }

    default:
      return state;
  }
};
