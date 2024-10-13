import { applySnapshot, cast, Instance, types } from 'mobx-state-tree';
import { IStatus, ITab } from '../../types';

const StatusType = types.enumeration<IStatus>('StatusType', ['done', 'wip']);
const TabType = types.enumeration<ITab>('TabType', ['all', 'done', 'wip']);

const todoModel = types
  .model('todoModel', {
    text: types.optional(types.string, ''),
    status: types.optional(StatusType, 'wip'),
  })
  .actions((self) => ({
    updateField<K extends keyof typeof self>(
      fieldName: K,
      value: (typeof self)[K],
    ): void {
      self[fieldName] = value;
    },
  }));

export interface ITodo extends Instance<typeof todoModel> {}

export const todosStore = types
  .model('todosStore', {
    list: types.optional(types.array(todoModel), [
      { text: 'Тестовое задание', status: 'done' },
      { text: 'Прекрасный код', status: 'done' },
      { text: 'Покрытие тестами', status: 'done' },
    ]),
    tab: types.optional(TabType, 'all'),
  })
  .views((self) => ({
    get currentList(): ITodo[] {
      return self.tab === 'all'
        ? self.list
        : self.list.filter((todo) => todo.status === self.tab);
    },
  }))
  .actions((self) => ({
    addTodo(value: string): void {
      self.list.push({
        text: value,
        status: 'wip',
      });
    },
    setTab(tab: ITab): void {
      self.tab = tab;
    },
    clearList(): void {
      if (self.tab === 'all') {
        applySnapshot(self.list, []);
      } else {
        self.list = cast(
          self.list.filter((todo: ITodo) => todo.status !== self.tab),
        );
      }
    },
  }));
