export function getParamsFromUrl() {
  const path = window.location.search;

  return path.split("=")[1];
}
