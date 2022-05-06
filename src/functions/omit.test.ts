import { expect } from 'chai';
import { omit } from './omit';

describe('functions/omit', () => {
  const object = {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 50_000,
    nested: {
      tothemoon: true,
    },
  };

  it('GIVEN valid keys THEN success', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, price, nested, ...expected } = object;
    expect(omit(object, 'name', 'price', 'nested')).eql(expected);
  });

  it('GIVEN duplicated keys THEN success', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { symbol, ...expected } = object;
    expect(omit(object, 'symbol' as any, 'symbol' as any)).eql(expected);
  });

  it('GIVEN nonexistent key THEN success', () => {
    expect(omit(object, 'unknown' as any)).eql(object);
  });

  it('GIVEN no keys THEN success', () => {
    expect(omit(object)).eql(object);
  });
});
