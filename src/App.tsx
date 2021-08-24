import React, { useState } from 'react';
import { ToDoList } from './ToDoList';

const initialTodos: Todo[] = [
  {
    text: 'Study coding',
    complete: false,
  },
  {
    text: 'Work out',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
    return <ToDoList todos={todos} toggleTodo={toggleTodo} />;
}

export default App;
