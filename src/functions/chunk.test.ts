import { expect } from 'chai';
import { chunk } from './chunk';

describe('functions/chunk', () => {
  const array = [1, 2, 3, 4, 5];

  it('GIVEN chunk size 1 THEN success', () => {
    expect(chunk(array, 1)).eql([[array[0]], [array[1]], [array[2]], [array[3]], [array[4]]]);
  });

  it('GIVEN chunk size >1 THEN success', () => {
    expect(chunk(array, 3)).eql([array.slice(0, 3), array.slice(3, 5)]);
  });

  it('GIVEN chunk size 0 THEN throw error', () => {
    expect(() => chunk(array, 0)).throw('Chunk size cannot be less than 1!');
  });
});
