
import './App.css';
import Header from './componants/header';
import Main from './componants/main';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Error from './componants/error';
import Display from './componants/display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

const [data, setData] = useState([]);
const [page, setPage] = useState(1);

  const fetchData = async()=>{
try{
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ad5f6abb16eae784220f51a3541bfa8d&language=ar&page=1');
setData(response.data.results);
setPage(response.data.total_pages);
}
catch(error){
    setData(error.message);
}
}
useEffect(()=>{
fetchData();
    },[])
  
const handleSearch = async (quary) => {
  if (quary === '') {
    fetchData();
    return;
  }
const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad5f6abb16eae784220f51a3541bfa8d&query=${quary}&language=ar`
  );
  setData(response.data.results);
  setPage(response.data.total_pages);
}

const handlePagination = async (n) => {
const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad5f6abb16eae784220f51a3541bfa8d&language=ar&page=${n}`);
setData(res.data.results);
}

  return (
    <div>
    
      <Header handleSearch={handleSearch} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main data={data} handlePagination={handlePagination} pageCount={page}   />} />
          <Route path="/display/:id" element={<Display data={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
