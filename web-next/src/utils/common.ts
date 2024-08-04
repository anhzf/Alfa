export const createId = (() => {
  let id = 0;
  return (prefix = 'id') => `${prefix}-${id++}`;
})();

const booleanish = {
  true: true,
  [1]: true,
  yes: true,
  false: false,
  [0]: false,
  no: false,
};

export const bool = (value: any) => typeof value === 'boolean'
  ? value : (booleanish[value as keyof typeof booleanish] ?? !!value);