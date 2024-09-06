import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import React from 'react';
import Header from './componets/header';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="./header" element={ <Header/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
