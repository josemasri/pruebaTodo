import { todoConstants } from '../_constants';
import { todosService } from '../_services';

export const todosActions = {
  get,
  getAll,
  create,
  update,
  updateCompleted,
  delete: _delete,
};

function get(id) {
  return (dispatch) =>
    todosService.get(id).then((todo) =>
      dispatch({
        type: todoConstants.GET,
        payload: todo,
      })
    );
}

function getAll() {
  return (dispatch) =>
    todosService.getAll().then((todos) => {
      dispatch({
        type: todoConstants.GET_ALL,
        payload: todos,
      });
    });
}

function create(title, name) {
  return (dispatch) =>
    todosService.create(title, name).then((todo) => {
      dispatch({
        type: todoConstants.CREATE,
        payload: todo,
      });
    });
}

function update(id, title, name, completed) {
  return (dispatch) =>
    todosService.update(id, title, name, completed).then((todo) =>
      dispatch({
        type: todoConstants.UPDATE,
        payload: todo,
      })
    );
}

function updateCompleted(id, completed) {
  return (dispatch) =>
    todosService.updateCompleted(id, completed).then((todo) =>
      dispatch({
        type: todoConstants.UPDATE_COMPLETED,
        payload: todo,
      })
    );
}

function _delete(id) {
  return (dispatch) => {
    todosService.delete(id).then(() =>
      dispatch({
        type: todoConstants.DELETE,
        payload: id,
      })
    );
  };
}
