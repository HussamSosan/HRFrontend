import { ShortifyPipe } from './shortify.pipe';

describe('ShortifyPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortifyPipe();
    expect(pipe).toBeTruthy();
  });

  it('return the input as output if input length is less than 10', () => {
    const pipe = new ShortifyPipe();
    const input = 'text';
    const output = pipe.transform(input);
    const expectedOutput = input;
    expect(output).toEqual(expectedOutput);
  });

  it('return shortified version of input if input length is greater than 10', () => {
    const pipe = new ShortifyPipe();
    const input = 'verylongtext';
    const output = pipe.transform(input);
    const expectedOutput = 'verylongte...';
    expect(output).toEqual(expectedOutput);
  });
});
