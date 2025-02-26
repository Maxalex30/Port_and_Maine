import axios from'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/',
    // Remove ngrok header if not needed:
    // headers: {"ngrok-skip-browser-warning": "true"}
    // It works on local
  });