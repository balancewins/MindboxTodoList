import { observer } from 'mobx-react-lite';
import { Container } from './todosList.styled';
import { Actions, List, NewTodo } from './components';

export const TodosList = observer(() => {
  return (
    <Container>
      <NewTodo />
      <List />
      <Actions />
    </Container>
  );
});
