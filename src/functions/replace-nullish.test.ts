import { expect } from 'chai';
import { replaceNullish } from './replace-nullish';

describe('functions/replaceNullish', () => {
  const object = {
    key: 'value',
    _null: null,
    _undefined: undefined,
    nested: {
      key: 'value',
      _null: null,
      _undefined: undefined,
      nesteedArray: [{ key: 'value', date: new Date(), _null: null, _undefined: undefined }],
    },
  };

  it('GIVEN object with disabled deep THEN success', () => {
    expect(replaceNullish(object, 0)).eql({
      key: 'value',
      _null: 0,
      _undefined: 0,
      nested: object.nested,
    });
  });

  it('GIVEN object with enabled deep THEN success', () => {
    expect(replaceNullish(object, 0, true)).eql({
      key: 'value',
      _null: 0,
      _undefined: 0,
      nested: {
        key: 'value',
        _null: 0,
        _undefined: 0,
        nesteedArray: [{ key: 'value', date: object.nested.nesteedArray[0].date, _null: 0, _undefined: 0 }],
      },
    });
  });
});
