import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = text => {
    const obj = {
      text,
      id: nanoid(),
    };
    console.log(obj);

    setTodos([...todos, obj]);
  };
  console.log(todos);
  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} />
    </>
  );
};
