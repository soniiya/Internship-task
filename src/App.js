import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Result from './components/Result';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
const [result,setResult] = useState([]);

  const getUser = async() =>{
    try{
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      ///console.log(data.json());
    setResult(data.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/result' element={<Result result={result} />} />
      </Routes>
    </Router>
  );
}

export default App;
