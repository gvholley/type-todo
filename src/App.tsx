import React from 'react';
import { TodoListItem } from './ToDoListItem';

const todos: Todo[] = [
  {
    text: 'Study coding',
    complete: false,
  },
  {
    text: 'Work out',
    complete: true,
  },
]

function App() {
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
