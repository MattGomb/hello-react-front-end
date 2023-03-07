import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '../redux/ConfigureStore';
import Greeting from './Greeting';

function App() {
  return (
    <Provider store={Store}>
      <container>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </container>
    </Provider>
  );
}

export default App;
