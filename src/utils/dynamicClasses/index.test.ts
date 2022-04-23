import classesIf from './classesIf';

describe('Style dinamic', () => {
  it('should return a text', () => {
    const type = 'primary';
    const expectedType = 'primary';
    expect(classesIf(type === expectedType, 'background-red text-white')).toBe(
      'background-red text-white'
    );
  });

  it('should return an empty text', () => {
    const condition = false;

    expect(classesIf(condition, 'background-red text-white')).toBe('');
  });
});
