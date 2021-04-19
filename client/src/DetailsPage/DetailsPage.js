import {
  faEdit,
  faPencilAlt,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { todosActions } from '../_actions';
import { EditTodo } from './EditTodo';
import './DetailsPage.css';
import '../HomePage/components/AddTodo.css';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)


Modal.setAppElement('#root');

export const DetailsPage = ({ id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = useSelector((state) => state.todos.todo);

  useEffect(() => {
    dispatch(todosActions.get(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const deleteTodo = () => {
    dispatch(todosActions.delete(id));
    history.goBack();
  };

  const [isModalOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white mx-auto absolute top-0 right-0 md:px-10 md:py-5 shadow-2xl w-full h-full px-10 py-10 md:w-96">
      <div className="w-80 flex flex-col h-full justify-between">
        <div className="">
          <button
            onClick={() => dispatch(todosActions.cleanSelected())}
            style={{ position: 'absolute', top: '10px', right: '15px' }}
          >
            <FontAwesomeIcon
              className="text-2xl text-gray-400"
              icon={faTimes}
            />
          </button>
          <h4 className="p-3 mt-10 font-bold text-2xl">{todo?.title}</h4>
          <select className="block w-full border py-1">
            {todo?.completed ? (
              <option value="true">Status: Completed</option>
            ) : (
              <option value="false">Status: Pending</option>
            )}
          </select>
          <h5 className="font-semibold text-lg mt-2">Created</h5>
          <p>
            {new Date(todo?.createdAt).getMonth() + 1}/
            {new Date(todo?.createdAt).getDate()}/
            {new Date(todo?.createdAt).getFullYear()}
          </p>
          <h5 className="font-semibold text-lg mt-2">Description</h5>
          <p>{todo?.name}</p>

          <p className="mt-5">Updated: {dayjs(todo?.updatedAt).fromNow()}</p>
          <p>by Peter Smith</p>
        </div>
        <div className="mt-5 mb-10">
          <button
            onClick={() => setIsOpen(true)}
            className="py-2 px-3 bg-gray-300 font-semibold"
          >
            <FontAwesomeIcon
              className="mr-2 text-blue-700"
              icon={faPencilAlt}
            />
            Edit
          </button>
          <button
            onClick={deleteTodo}
            className="py-2 px-3 ml-3 bg-gray-300 font-semibold"
          >
            <FontAwesomeIcon className="mr-2 text-blue-700" icon={faTrash} />
            Delete
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsOpen(false)}
          className="modal bg-white border border-gray-100 rounded-sm p-5 shadow-xl md:w-2/3 lg:w-1/2 xl:w-1/3 outline-none"
        >
          <EditTodo setIsOpen={setIsOpen} />
        </Modal>
      </div>
    </div>
  );
};
