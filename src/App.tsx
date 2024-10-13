import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { lazyLoad } from './utils';

const TodosList = lazyLoad(
  () => import('./views'),
  (module) => module.TodosList,
);

export const App: FC = observer(() => {
  return <TodosList />;
});
