import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Homepage from './pages/homepage';
import Student from './pages/studentsInfo';
import Admin from './pages/admin';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/studentInfo" element={<Student />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
