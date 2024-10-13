import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../hooks';
import { TabConstant } from '../../../../constants';
import { SimpleButton } from '../../../../components';
import { ButtonsGroup, Container, Line } from './actions.styled';

export const Actions = observer(() => {
  const { todos } = useStore();

  const selectedTab: string = useMemo(
    () => TabConstant.find((tab) => tab.value === todos.tab)?.text || '',
    [todos.tab],
  );

  return (
    <Container>
      <ButtonsGroup>
        {TabConstant.map((item, i) => (
          <SimpleButton key={i} onClick={() => todos.setTab(item.value)}>
            {item.text}
          </SimpleButton>
        ))}
      </ButtonsGroup>
      <Line>
        <span>Выбрано: {selectedTab}</span>
        <SimpleButton onClick={todos.clearList}>Удалить выбранное</SimpleButton>
      </Line>
    </Container>
  );
});
