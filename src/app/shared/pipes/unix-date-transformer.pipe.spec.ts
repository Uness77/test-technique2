import { UnixDateTransformerPipe } from './unix-date-transformer.pipe';

describe('UnixDateTransformerPipe', () => {
  let unixDatePipe: UnixDateTransformerPipe;

  beforeEach(() => {
    unixDatePipe = new UnixDateTransformerPipe();
  });

  it('create an instance', () => {
    expect(unixDatePipe).toBeTruthy();
  });

  it('should transform UNIX timestamp to a French locale time string', () => {
    const timestamp = 1630230200;
    expect(unixDatePipe.transform(timestamp)).toBe(new Date(timestamp * 1000).toLocaleTimeString('fr-FR'));
  });

});
