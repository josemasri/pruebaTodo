import axios from 'axios';

export const todosService = {
  get,
  getAll,
  create,
  update,
  updateCompleted,
  delete: _delete,
};

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/todos`,
});

async function getAll() {
  const res = await client.get('/');
  return res.data;
}

async function get(id) {
  const res = await client.get(`/${id}`);
  return res.data;
}

async function create(title, name) {
  const res = await client.post('/', {
    title,
    name,
  });
  return res.data;
}

async function update(id, title, name, completed) {
  const res = await client.put(`/${id}`, {
    title,
    name,
    completed,
  });
  return res.data;
}

async function updateCompleted(id, completed) {
  const res = await client.patch(`/${id}`, {
    completed,
  });
  return res.data;
}

async function _delete(id) {
  const res = await client.delete(`/${id}`);
  return res.data;
}
