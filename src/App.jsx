import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Enter from '../pages/Enter';
import Start from '../pages/Start';
import Quiz from '../pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/enter/start" element={<Start />} />
        <Route path="/enter/start/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;