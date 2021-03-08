import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TodoItem } from './TodoItem';

export const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="py-5">
      <hr />
      <div
        className="my-2 font-bold"
        style={{
          display: 'grid',
          gridTemplateColumns: '20% 40% 40%',
        }}
      >
        <div></div>
        <h4>Title</h4>
        <h4>Created</h4>
      </div>
      {todos.map((todo) => (
        <Link to={`/${todo.id}`} key={todo.id}>
          <TodoItem todo={todo} />
        </Link>
      ))}
      <hr />
    </div>
  );
};
