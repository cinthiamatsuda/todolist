import axios from 'axios';
//http://localhost:3333/tasks
const api = axios.create({
  baseURL: 'https://to-do-list-frontend-chi.vercel.app'
});
export default api;