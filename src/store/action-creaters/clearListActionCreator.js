import { clearList } from "../actions/clearList";

export function clearListInfo() {
  return { type: clearList, payload: {} };
}
