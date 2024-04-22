import assert from 'node:assert';
import { describe, it } from '../src/test_runner';

describe('synchronous suite', () => {
  it('passes', () => {
    assert(true === true);
  });
  it('fails', () => {
    const actual = false as boolean;
    assert(actual === true, 'oh what, surprising failure');
  });

});

describe('asynchronous suite', () => {
  it('passes', async () => {
    const actual = await new Promise((resolve, reject) => {
      resolve(true as boolean);
    });
    assert(actual === true);
  });
  it('fails', async () => {
    const actual = await new Promise((resolve, reject) => {
      resolve(false as boolean);
    });
    assert(actual === true, 'oh what, surprising failure');
  });
});