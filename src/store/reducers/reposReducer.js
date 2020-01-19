import { REPOSACTIONSUCCESS, SINGLREPOSACTIONSUCCESS } from "../actions/reposAction";
import { clearList } from "../actions/clearList";

const initialState = {
  repos: {
    total_count: 0,
    items: []
  },
  singleRepo: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REPOSACTIONSUCCESS: {
      const tempState = { ...state };

      tempState.repos = { ...payload.repos };

      return tempState;
    }
    case clearList: {
      const tempState = { ...state };

      tempState.repos = { ...tempState.repos };
      tempState.repos.items = [...tempState.repos.items];
      tempState.repos.items = [];
      tempState.repos.total_count = "";

      return tempState;
    }
    case SINGLREPOSACTIONSUCCESS: {
      const tempState = { ...state };

      tempState.singleRepo = { ...tempState.singleRepo };
      tempState.singleRepo = { ...payload.repo };

      return tempState;
    }

    default:
      return state;
  }
};
