import { createStore } from 'pinia';

export enum STATUS {
  CHECKED,
  NOTCHECKED,
  DELETED,
}

export const useMainStore = createStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: 'todo',
  // a function that returns a fresh state
  state: () => ({
    todoList: [
      {
        id: 0,
        status: STATUS.NOTCHECKED,
        text: '我是测试1',
      },
    ],
  }),
  actions: {
    addTodo(text) {
      const len = this.state.todoList.length;

      this.state.todoList.push({
        id: len,
        text,
        status: STATUS.NOTCHECKED,
      });
    },
    checkTodo(id) {
      const todo = this.state.todoList.find(todo => todo.id === id);
      todo!.status = STATUS.CHECKED;
    },
    deleteTodo(id) {
      const todo = this.state.todoList.find(todo => todo.id === id);
      todo!.status = STATUS.NOTCHECKED;
    },
  },
});
