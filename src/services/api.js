import axios from 'axios';

const api = axios.create({
  baseURL: 'https://painel.gruposaber.com.br/wp-json/wp/v2',
});

export default api;
