import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            count={index + 1}
            onDelete={onDelete}
            id={todo.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
