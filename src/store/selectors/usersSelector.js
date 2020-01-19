export const usersDataSelector = state => state.usersReducer;

export const usersSelector = state => usersDataSelector(state).users;
export const singleUserSelector = state => usersDataSelector(state).singleUser;
