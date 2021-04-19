import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TodoItem } from './TodoItem';
import {todosActions} from '../../_actions'

export const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="py-5" style={{ height: '75vh' }}>
      <hr />
      <div
        className="my-2 font-bold todos-display"
      >
        <div></div>
        <h4>Title</h4>
        <h4>Created</h4>
        <h4 className="hidden md:inline-block">Description</h4>
      </div>
      {todos.map((todo) => (
        <div className="cursor-pointer" onClick={() => dispatch(todosActions.select(todo.id))}>
          <TodoItem todo={todo} />
        </div>
      ))}
      <hr />
    </div>
  );
};
