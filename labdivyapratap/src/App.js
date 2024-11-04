import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
return (
<>

  <Routes>
    <Route path= "/" element={<Home/>} />
    <Route path= "/Login" element={<Login/>} />
    <Route path= "/Signup" element={<Signup/>} />
  </Routes>

{/* <p>Kuch to aaya</p> */}
</>
);
}
export default App;
