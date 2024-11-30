import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

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
      {todos.length ? (
        <TodoList todos={todos} onDelete={handleDelete} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
