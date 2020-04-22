import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {
  it('create an instance', () => {
    const pipe = new StarsPipe();
    expect(pipe).toBeTruthy();
  });

  it('return correct output', () => {
    const pipe = new StarsPipe();
    const input = '01233221100';
    const output = pipe.transform(input);
    const expectedOutput = '01233221***';
    expect(output).toEqual(expectedOutput);
  });

});
