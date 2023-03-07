import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <container>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </container>
  );
}

export default App;
