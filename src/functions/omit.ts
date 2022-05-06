export function omit<T extends object, K extends [...Array<keyof T>]>(
  obj: T,
  ...keys: K
): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
} {
  const cloned = { ...obj };
  keys.forEach((prop) => delete cloned[prop]);
  return cloned;
}
