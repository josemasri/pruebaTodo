import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Todos } from './components/Todos';
import { TodosHeader } from './components/TodosHeader';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../_actions';
import './HomePage.css';
import { DetailsPage } from '../DetailsPage/DetailsPage';

export const HomePage = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  
  useEffect(() => {
    console.log(selectedTodo);
    dispatch(todosActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto md:p-5 bg-gray-100">
      <div className="bg-white">
        <Header />
        <TodosHeader />
        <Todos />
        {selectedTodo && <DetailsPage id={selectedTodo} /> }
      </div>
    </div>
  );
};
