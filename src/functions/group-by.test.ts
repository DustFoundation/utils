import { expect } from 'chai';
import { groupBy } from './group-by';

describe('functions/groupBy', () => {
  const array = [
    { symbol: 'BTC', price: Math.random() },
    { symbol: 'ETH', price: Math.random() },
    { symbol: 'ETH', price: Math.random() },
    { symbol: 'BTC', price: Math.random() },
    { bad: true },
  ];

  it('GIVEN valid key THEN success', () => {
    expect(groupBy(array, 'symbol')).eql({
      [array[0].symbol]: [array[0], array[3]],
      [array[1].symbol]: [array[1], array[2]],
    });
  });

  it('GIVEN nonexistent key THEN empty object', () => {
    expect(groupBy(array, 'unknown' as any)).eql({});
  });
});
