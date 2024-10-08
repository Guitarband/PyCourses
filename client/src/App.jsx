import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Intro_to_Python from "./courses/Intro_to_Python.jsx";

function App() {
  return (
    <Router>
        <div className={"App"}>
            <Routes>
                <Route path={"/"} element={<h2>Home</h2>}/>
                <Route path="/course/intro_to_python/*" element={<Intro_to_Python />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
