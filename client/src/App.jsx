import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Intro_to_Python from "./courses/Intro_to_Python.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
        <div className={"App"}>
            <Routes>
                <Route path={"/"} element={
                    <>
                        <NavBar />
                        <Home />
                    </>
                }/>
                <Route path="/course/intro_to_python/*" element={<Intro_to_Python />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
