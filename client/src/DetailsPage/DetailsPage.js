import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { todosActions } from '../_actions';
import { EditTodo } from './EditTodo';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const DetailsPage = () => {
  const { id } = useParams();
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
    <div className="bg-white p-5 max-w-4xl mx-auto">
      <button
        onClick={() => history.goBack()}
        style={{ position: 'absolute', top: '10px', right: '15px' }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h4 className="p-3 mt-10 font-bold text-2xl">{todo?.title}</h4>
      <select className="block w-full border py-1">
        {todo?.completed ? (
          <option value="true">Status: Completed</option>
        ) : (
          <option value="false">Status: Pending</option>
        )}
      </select>
      <h5 className="font-semibold mt-2">Created</h5>
      <p>
        {new Date(todo?.createdAt).getMonth() + 1}/
        {new Date(todo?.createdAt).getDate()}/
        {new Date(todo?.createdAt).getFullYear()}
      </p>
      <h5 className="font-semibold mt-2">Description</h5>
      <p>{todo?.name}</p>

      <p className="mt-5">Updated: {new Date(todo?.updatedAt).toString()}</p>
      <div className="mt-5">
        <button
          onClick={() => setIsOpen(true)}
          className="py-2 px-3 bg-gray-300 font-semibold"
        >
          <FontAwesomeIcon className="mr-2" icon={faEdit} />
          Edit
        </button>
        <button
          onClick={deleteTodo}
          className="py-2 px-3 ml-3 bg-gray-300 font-semibold"
        >
          <FontAwesomeIcon className="mr-2" icon={faTrash} />
          Delete
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <EditTodo setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};
