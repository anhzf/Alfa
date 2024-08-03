export const once = <T>(fn: () => T): (() => T) => {
  let value: T;
  return () => value ??= fn();
};
