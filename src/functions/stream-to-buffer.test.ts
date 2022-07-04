import { expect } from 'chai';
import { createReadStream } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { streamToBuffer } from './stream-to-buffer';

describe('functions/streamToBuffer', () => {
  it('GIVEN valid stream THEN success', async () => {
    const expected = await readFile(__filename, 'utf8');

    const stream = createReadStream(__filename);
    const buffer = await streamToBuffer(stream);

    expect(buffer.toString('utf8')).eql(expected);
  });
});
