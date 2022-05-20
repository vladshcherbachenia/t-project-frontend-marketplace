import React from 'react';
import './App.css';
import Main from "./pages/Main";
import Login from "./public/Login"
import Register from "./public/Register"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rankings from "./pages/Rankings";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/rankings" element={<Rankings/>} />
                <Route path="/stats" element={<Stats/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
