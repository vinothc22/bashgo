import { TruncatePipe } from './truncate.pipe';


describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });
  it('should display in truncate format', () => {
    const truncate = 'poiuytrewqasdfghjklm...';
    const pipe = new TruncatePipe();
    const result = pipe.transform(truncate);
    expect(result).toBe('poiuytrewqasdfghjklm...');
  })
});
