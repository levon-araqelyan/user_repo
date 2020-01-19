import { REPOSACTION, REPOSACTIONSUCCESS, SINGLREPOSACTION, SINGLREPOSACTIONSUCCESS } from "../actions/reposAction";

export function getReposRequest(searchedRepos, page) {
  return { type: REPOSACTION, payload: { searchedRepos, page } };
}

export function getReposRequestSucceed(repos) {
  return { type: REPOSACTIONSUCCESS, payload: { repos } };
}

export function getSinglReposRequest(name) {
  return { type: SINGLREPOSACTION, payload: { name } };
}

export function getSinglReposRequestSucceed(repo) {
  return { type: SINGLREPOSACTIONSUCCESS, payload: { repo } };
}
