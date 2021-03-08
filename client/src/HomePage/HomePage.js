import React, { useEffect } from 'react';
import { Header } from './Header';
import { Todos } from './components/Todos';
import { TodosHeader } from './components/TodosHeader';
import { useDispatch } from 'react-redux';
import { todosActions } from '../_actions';

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todosActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <TodosHeader />
      <Todos />
    </div>
  );
};
