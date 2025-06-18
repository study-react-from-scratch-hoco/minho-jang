export const resourceCache = {};

export const createResource = (asyncTask, key, fallback) => {
  if (resourceCache[key]) {
    return resourceCache[key];
  }
  throw { promise: asyncTask(), key, fallback };
};
