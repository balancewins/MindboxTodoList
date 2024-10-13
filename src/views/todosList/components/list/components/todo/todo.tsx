import { FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { ITodo } from '../../../../../../store/models/todosStore';
import { Container, StyledSpan } from './todo.styled';

interface TodoProps {
  todo: ITodo;
}

export const Todo: FC<TodoProps> = observer(({ todo }) => {
  const isChecked: boolean = useMemo(
    () => todo.status === 'done',
    [todo.status],
  );

  const toggleChecked = (): void => {
    todo.updateField('status', isChecked ? 'wip' : 'done');
  };

  return (
    <Container>
      <input type={'checkbox'} checked={isChecked} onChange={toggleChecked} />
      <StyledSpan isDone={isChecked}>{todo.text}</StyledSpan>
    </Container>
  );
});
