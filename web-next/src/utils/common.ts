export const createId = (() => {
  let id = 0;
  return (prefix = 'id') => `${prefix}-${id++}`;
})();