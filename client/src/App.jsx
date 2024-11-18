import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import Courses from "./pages/Courses.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";

function App() {
    return (
    <ErrorBoundary>
        <Router>
            <div className={"App"}>
                <Routes>
                    <Route path={"/"} element={
                        <>
                            <NavBar />
                            <Home />
                        </>
                    }/>
                    <Route path={"/courses/*"} element={
                        <>
                            <Courses />
                        </>
                    }/>
                    <Route path={"/contact"} element={
                        <>
                        <NavBar />
                        <Contact />
                        </>
                    }/>
                    <Route path={"*"} element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    </ErrorBoundary>
    )
}

export default App
