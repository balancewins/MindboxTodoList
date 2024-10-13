import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../hooks';
import { ITodo } from '../../../../store/models/todosStore';
import { Todo } from './components';
import { Container, EmptyList } from './list.styled';

export const List = observer(() => {
  const { todos } = useStore();

  return (
    <Container>
      {!!todos.currentList.length ? (
        todos.currentList.map((todo: ITodo, i) => <Todo key={i} todo={todo} />)
      ) : (
        <EmptyList>
          <span>Задач нет</span>
        </EmptyList>
      )}
    </Container>
  );
});
