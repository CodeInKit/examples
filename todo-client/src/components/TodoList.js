import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { flows, cikReact } from '@codeinkit/flows-client';


function TodoList(props) {
  const [newTodo, setNewTodo] = useState('');
  const todos = cikReact.useCIKState('todos');

  return (
    <div>
      <input onChange={e => setNewTodo(e.target.value)} />
      <button onClick={() => flows.execute('todo/add', {text: newTodo})}>add todo</button>

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList;