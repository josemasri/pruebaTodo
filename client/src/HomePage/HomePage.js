import React, { useEffect } from 'react';
import { Header } from './Header';
import { Todos } from './components/Todos';
import { TodosHeader } from './components/TodosHeader';
import { useDispatch } from 'react-redux';
import { todosActions } from '../_actions';
import './HomePage.css';

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto lg:p-5 bg-gray-100">
      <div className="bg-white">
        <Header />
        <TodosHeader />
        <Todos />
      </div>
    </div>
  );
};
