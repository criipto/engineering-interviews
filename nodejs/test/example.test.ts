import assert from 'node:assert';
import { describe, it } from '../src/test_runner';

const wait = (duration: number) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}

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
    await wait(200);
    const actual = await new Promise((resolve, reject) => {
      resolve(true as boolean);
    });
    assert(actual === true);
  });
  it('fails', async () => {
    const actual = await new Promise((resolve, reject) => {
      resolve(false as boolean);
    });
    await wait(200);
    assert(actual === true, 'that\'s strange');
  });
});