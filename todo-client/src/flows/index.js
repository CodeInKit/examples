import { flows, state } from '@codeinkit/flows-client';

import addTodo from './todo/add';
import removeTodo from './todo/remove';
import updateTodo from './todo/update';

state.createState({
  todos: []
});

flows.register('todo/remove', removeTodo);
flows.register('todo/add', addTodo);
flows.register('todo/update', updateTodo);