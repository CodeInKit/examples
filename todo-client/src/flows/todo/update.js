import { state } from '@codeinkit/flows-client';
import _ from 'lodash';


export default [(data) => {
  const todos = state.stateSnapshot('todos');
  const todo = _.find(todos, todo => todo.id === data.id);

  _.extend(todo, data);

  return {
    todos
  };
}, state.setState]