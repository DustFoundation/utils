export function groupBy<T = any>(xs: T[], key: keyof T): Record<string, T[]> {
  return xs.reduce((rv, x) => {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
      (rv[x[key] as any] = rv[x[key] as any] || []).push(x);
    }
    return rv;
  }, {});
}
