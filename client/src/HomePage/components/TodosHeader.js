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

  return (
    <>
      <div className="px-5">
        <h2 className="my-2 font-bold">Tasks</h2>
        <div className="flex justify-between text-gray-400">
          <input type="date" className="border w-2/3 rounded" />|
          <button
            onClick={() => setIsOpen(true)}
            className="w-1/4 text-blue-500 text-sm"
          >
            <FontAwesomeIcon icon={faPlusCircle} /> Add Task
          </button>
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
