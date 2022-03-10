import axios from 'axios';
      
export default axios.create({
    baseURL: "http://svuv-api.herokuapp.com",
    headers: {
    Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjQ1MzkzMTkyLCJqdGkiOiI1Y2I5OWViYy04NzQxLTQzOTMtYmUyMS1kYmY4ZmQ2YWNmMGYiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxLCJuYmYiOjE2NDUzOTMxOTIsImV4cCI6MTY0NTk5MzE5Mn0.u9_BoxB9w7g5sTsaFWrWpz8-FvAQk4O0sEdrjG3oWr4'
    }
}); 

//banco.get('/data_read/last')