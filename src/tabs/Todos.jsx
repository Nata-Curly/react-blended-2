import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = text => {
    setTodos([
      ...todos,
      {
        text,
        id: nanoid(),
      },
    ]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
};
