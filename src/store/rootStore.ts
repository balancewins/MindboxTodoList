import { types } from 'mobx-state-tree';
import { todosStore } from './models';

export const RootStore = types.model('RootStore', {
  todos: types.optional(todosStore, {}),
});

export const store = RootStore.create({});
