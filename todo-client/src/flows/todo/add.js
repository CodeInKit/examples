import { state } from '@codeinkit/flows-client';
import _ from 'lodash';


export default [(data) => {
  const todos = state.stateSnapshot('todos');
  todos.push({...data, id: _.uniqueId('i'), done: false});

  return {
    todos
  };
}, state.setState]