export function replaceNullish<T extends object, K>(
  obj: T,
  replacer: K,
  deep?: boolean,
): { [P in keyof T]: NonNullable<T[P]> & K } {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (deep) {
      if (Array.isArray(value)) {
        acc[key] = value.map((v) => (typeof v === 'object' ? replaceNullish(v, replacer, deep) : v));
      } else if (value instanceof Date) {
        acc[key] = value;
      } else if (typeof value === 'object' && value != null) {
        acc[key] = replaceNullish(value, replacer, deep);
      } else {
        acc[key] = value ?? replacer;
      }
    } else {
      acc[key] = value ?? replacer;
    }

    return acc;
  }, {} as { [P in keyof T]: NonNullable<T[P]> & K });
}
