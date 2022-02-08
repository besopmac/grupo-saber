import axios from 'axios';

const mapa = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/microrregioes',
});

export default mapa;
