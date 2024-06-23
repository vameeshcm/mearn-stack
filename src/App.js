
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Tabadd from './components/Tabadd';
import Tabview from './components/Tabview';
import { Router } from 'react-router-dom/dist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Tabadd/>}/>
        <Route path='/data' element={<Tabview/>}/>
      </Routes>
    </div>
  );
}

export default App;
