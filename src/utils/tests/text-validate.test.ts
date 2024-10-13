import { validateSpaces, validateTodoText } from '../text-validate';

describe('TextValidate', () => {
  it('Should remove spaces at the beginning of the line', () => {
    expect(validateSpaces('   test ')).toEqual('test ');
  });

  it('Should return only valid symbols and capitalize first letter', () => {
    expect(validateTodoText('    написать тесты')).toEqual('Написать тесты');
  });
});
