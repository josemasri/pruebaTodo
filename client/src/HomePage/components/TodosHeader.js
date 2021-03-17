import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';
import { AddTodo } from './AddTodo';

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

Modal.setAppElement('#root');

export const TodosHeader = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const date = new Date();

  return (
    <>
      <div className="px-5">
        <div className="flex justify-between text-gray-400 pt-5">
          <div className="">
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
              className="w-1/4 text-blue-500 text-sm"
            >
              <FontAwesomeIcon icon={faPlusCircle} /> Add Task
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <AddTodo setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};
