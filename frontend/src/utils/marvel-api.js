import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://gateway.marvel.com/',
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance