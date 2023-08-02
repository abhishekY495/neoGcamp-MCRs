export const fakeFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ getLocalData: true });
  }, 4000);
});
