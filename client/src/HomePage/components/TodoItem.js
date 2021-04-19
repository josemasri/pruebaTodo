import PropTypes from 'prop-types';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { todosActions } from '../../_actions';

export const TodoItem = ({ todo: { id, title, createdAt, completed, name } }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(todosActions.updateCompleted(id, !completed));
  };

  const createdAtFormated = new Date(createdAt);

  return (
    <>
      <hr />
      <div
        className="todos-display my-2"
      >
        <button onClick={toggleComplete}>
          <FontAwesomeIcon className="text-gray-400" icon={completed ? faCheckCircle : faCircle} />
        </button>
        <span>{title}</span>
        <span>
          {createdAtFormated.getMonth() + 1}/{createdAtFormated.getDate()}/
          {createdAtFormated.getFullYear()}
        </span>
        <span className="hidden md:inline-block">{name}</span>
      </div>
    </>
  );
};

TodoItem.prototype = {
  task: PropTypes.object.isRequired,
};
