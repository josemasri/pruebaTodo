import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { todosActions } from '../_actions';

export const EditTodo = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todos.todo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(todosActions.get(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const [todo, setTodo] = useState(todoState);

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const editTodo = () => {
    if (todo.title.trim() === '') {
      return alert('Title is required');
    }
    dispatch(todosActions.update(id, todo.title, todo.name, todo.completed));
    setIsOpen(false);
  };

  return (
    <div>
      <div className="">
        <label htmlFor="">Title</label>
        <input
          value={todo.title}
          name="title"
          onChange={onChange}
          className="border block w-full mt-1 rounded border-gray-400 p-1"
          type="text"
        />
      </div>
      <div className="">
        <label htmlFor="">Description</label>
        <textarea
          value={todo.name}
          name="name"
          onChange={onChange}
          className="border block w-full mt-1 rounded border-gray-400 p-1"
          rows="5"
        ></textarea>
      </div>
      <div className="flex mt-3">
        <button
          onClick={() => setIsOpen(false)}
          className="py-1 px-3 bg-gray-300 font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={editTodo}
          className="py-1 px-3 ml-3 bg-blue-700 text-white font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
};
