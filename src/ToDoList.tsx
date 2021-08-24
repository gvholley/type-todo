import React from 'react';
import { TodoListItem } from './ToDoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const ToDoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
