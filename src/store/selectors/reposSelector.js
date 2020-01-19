export const reposDataSelector = state => state.reposReducer;

export const reposSelector = state => reposDataSelector(state).repos;
export const singleRepoSelector = state => reposDataSelector(state).singleRepo;
