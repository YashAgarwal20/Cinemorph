import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './component/header/Header';
import Home from './page/home/Home';
import Movielist from './component/movielist/Movielist';
import Moviedetail from './page/home/movieDetail/Moviedetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='movie/:id' element={<Moviedetail></Moviedetail>}></Route>
        <Route exact path='movies/:type' element={<Movielist />}></Route>
        <Route path='/*' element={<h1>error page</h1>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
