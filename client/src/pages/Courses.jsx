import React, { useState } from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import Intro_to_Python from "../courses/Intro_to_Python.jsx";
import "../styles/courseCatalogue.css"
import NavBar from "../components/NavBar.jsx";

function Courses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [languageFilter, setLanguageFilter] = useState("");

    const courseCatalogue = [
        {
            name: "Intro to Python",
            url: "intro_to_python",
            description: "Learn the basics of Python programming language",
            language: "Python",
        }
    ]

    const filteredCourses = courseCatalogue.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (languageFilter === "" || course.language.toLowerCase() === languageFilter.toLowerCase())
    );

    return (
      <>
          <Routes>
              <Route path={"/"} element={
                  <>
                      <NavBar/>
                      <div className={"Catalogue"}>
                          <h2 id={"courseTitle"}>Available Courses</h2>
                          <div className={"courseFinder"}>
                              <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={"courseSearch"}
                              />
                              <select className={"courseFilter"} onChange={(e) => setLanguageFilter(e.target.value)}>
                                  <option value="" selected style={{color: "gray"}}>Select a language...</option>
                                  <option value="python">Python</option>
                                  <option value="java">Java</option>
                              </select>
                          </div>
                          <div className={'courseMap'}>
                              {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                  <div key={index} className={"courseSlot"}>
                                      <a href={`/courses/${course.url}`}>{course.name}</a>
                                      <p className={"courseDescription"}>{course.description}</p>
                                  </div>
                                ))
                              ) : (
                                <p>No courses found</p>
                              )}
                          </div>
                      </div>
                  </>
              }/>
              <Route path={"/intro_to_python/*"} element={<Intro_to_Python/>}/>
          </Routes>
          <Outlet/>
      </>
    )
}

export default Courses
