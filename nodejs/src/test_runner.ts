import process from 'node:process';

export function describe(name: string, fn: () => void) {

}

export function it(name: string, fn: () => void | Promise<void>) {
  
}

process.nextTick(async () => {
  console.log('A clue');
});