import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import RegisterPage from './pages/Example/ExamplePage';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ExamplePage from './pages/Example/ExamplePage';


const Background = styled.div`
    max-width: 150px;
`


function App() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Background>
      <Routes>
        <Route path='/' element = {<ExamplePage />}/>
      </Routes>
    </Background>
  );
}


export default App;
