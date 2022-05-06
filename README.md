# @dustfoundation/utils

Shared **Utils** for Dust Foundation projects.

## Installation

```sh
npm install --save @dustfoundation/utils
```

## Features

### Array: Chunk

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. If chunk size is 0, throws error.

```ts
chunk([1, 2, 3, 4, 5], 3);
// => [[1, 2, 3], [4, 5]]
```

### Array: Group By

Creates an object composed of keys from given array. The order of grouped values is determined by the order they occur in array. The corresponding value of each key is an array of elements responsible for generating the key.

```ts
groupBy([
  { symbol: 'BTC', price: 1 },
  { symbol: 'ETH', price: 2 },
  { symbol: 'ETH', price: 3 },
  { symbol: 'BTC', price: 4 },
  { bad: true },
], 'symbol');
// => { BTC: [1, 4], ETH: [2, 3] }
```

### Object: Omit

Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

```ts
omit({
  name: 'Bitcoin',
  symbol: 'BTC',
  price: 50_000,
}, 'name', 'price');
// => { symbol: 'BTC' }
```
