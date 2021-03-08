import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../_actions';

export const AddTodo = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: '',
    name: '',
  });

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const addTodo = () => {
    if (todo.title.trim() === '') {
      return alert('Title is required');
    }
    dispatch(todosActions.create(todo.title, todo.name));
    setIsOpen(false);
  };

  return (
    <div>
      <div className="">
        <h2 className="font-bold">New Task</h2>
        <hr />
      </div>
      <div className="">
        <label htmlFor="">Title (Required)</label>
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
          onClick={addTodo}
          className="py-1 px-3 ml-3 bg-blue-700 text-white font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
};
