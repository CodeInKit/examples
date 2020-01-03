import React from 'react';
import { flows } from '@codeinkit/flows-client';


function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={e => flows.execute('todo/update', {id: props.todo.id, done: e.target.checked})}
      />
      {props.todo.text}
      <button onClick={() => flows.execute('todo/remove', {id: props.todo.id})}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem;