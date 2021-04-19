import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';
import { AddTodo } from './AddTodo';
import './AddTodo.css';

Modal.setAppElement('#root');

export const TodosHeader = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const date = new Date();

  return (
    <>
      <div className="px-5">
        <div className="md:flex item justify-between text-gray-400 pt-5">
          <div className="mb-5 md:mb-0">
            <h2 className="font-bold text-black">Tasks</h2>
          </div>
          <div className="w-5/6 lg:w-1/4">
            <input
              type="text"
              placeholder={`Created: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} \uD83D\uDCC5`}
              className="border w-8/12 lg:w-1/2 rounded mr-2 p-1"
              disabled
            />
            |
            <button
              onClick={() => setIsOpen(true)}
              className="pl-2 md:w-1/4 text-blue-700 text-sm focus:outline-none"
            >
              <FontAwesomeIcon icon={faPlusCircle} /> Add Task
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        id="add-todo"
        className="modal bg-white border border-gray-100 rounded-sm p-5 shadow-xl md:w-1/2 lg:w-1/3 xl:w-1/4 outline-none"
      >
        <AddTodo setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};
