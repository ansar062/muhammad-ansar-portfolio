// The dataset is public, so reads need no token. Never put a Sanity token in client code:
// anything here ships to every visitor's browser.
export const fetcher = (url) => fetch(url).then((response) => response.json());
