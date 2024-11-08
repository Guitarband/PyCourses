import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import TaskContent from "../pages/TaskContent.jsx";
import "../styles/courseTasks.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import courses from "../data/courseData.js";

function CourseData({ courseURL }) {
    return (
      <div className={"Course"}>
          <Routes>
              <Route path={"/"} element={
                  <>
                      <NavBar/>
                      <div id={"courseTitle"}>
                          <h2>{courses[courseURL].name}</h2>
                          <p>{courses[courseURL].details}</p>
                      </div>
                      <h2>Tasks</h2>
                      <div className={'taskMap'}>
                          {Object.entries(courses[courseURL].tasks).map(([key, task]) => (
                            <div key={key} className={"taskSlot"}>
                                <a href={`/courses/${courseURL}/${task.url}`}>{task.title}</a>
                                <p className={"taskDescription"}>{task.description}</p>
                            </div>
                          ))}
                      </div>
                      <Footer />
                  </>
              }/>
              {Object.entries(courses[courseURL].tasks).map(([key, task]) => (
                <Route key={key} path={'/' + task.url} element={<TaskContent courseURL={courseURL} task={task}/>}/>
              ))}
          </Routes>
          <Outlet/>
      </div>
    )
}

export default CourseData;