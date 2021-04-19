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
        <h2 className="text-xl font-bold mb-2">New Task</h2>
        <hr />
      </div>
      <div className="mt-5">
        <label htmlFor="">Title (Required)</label>
        <input
          value={todo.title}
          name="title"
          onChange={onChange}
          className="border block w-full mt-1 rounded border-gray-400 p-1"
          type="text"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="">Description</label>
        <textarea
          value={todo.name}
          name="name"
          onChange={onChange}
          className="border block w-full mt-1 rounded border-gray-400 p-1"
          rows="5"
        ></textarea>
      </div>
      <div className="flex md:justify-end mt-5">
        <button
          onClick={() => setIsOpen(false)}
          className="py-2 px-7 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          onClick={addTodo}
          className="py-2 px-7 ml-3 bg-blue-700 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};
