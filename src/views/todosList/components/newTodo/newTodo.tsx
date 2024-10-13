import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../hooks';
import { validateTodoText } from '../../../../utils';
import { SimpleInput } from '../../../../components';

export const NewTodo = observer(() => {
  const { todos } = useStore();
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (value: string): void => {
    setValue(validateTodoText(value));
  };

  const saveTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      !!value && todos.addTodo(value.trim());
      setValue('');
    }
  };

  return (
    <SimpleInput
      value={value}
      maxLength={50}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleChangeValue(e.target.value)
      }
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => saveTodo(e)}
      placeholder={'Что вы хотите сделать?'}
    />
  );
});
