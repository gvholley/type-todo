import React, { useState } from 'react';

interface Props {
  AddToDo: AddToDo;
}

export const AddToDoForm: React.FC<Props> = ({ AddToDo }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          AddToDo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
