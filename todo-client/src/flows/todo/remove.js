import { state } from '@codeinkit/flows-client';
import _ from 'lodash';


export default [(data) => {
  const todos = state.stateSnapshot('todos');
  _.remove(todos, t => t.id === data.id);

  return {
    todos
  };
}, state.setState]