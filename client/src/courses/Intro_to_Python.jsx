import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import Content from "../pages/Content.jsx";

function Intro_to_Python() {
    const courseData = {
        name: "Intro to Python",
        description: "Learn the basics of Python programming language",
        tasks: {
            hello_world: {
                title: "Hello World",
                details: "Write a program that prints 'Hello World!'",
                baseCode: "print('Hello World!')"
            }
        }
    }

    return (
      <div className={"Course"}>
          <Routes>
              <Route path={"/"} element={<h2>Home</h2>}/>
              <Route path={"/task_1"} element={<Content title={courseData.name} task={courseData.tasks.hello_world}/>}/>
          </Routes>
          <Outlet />
      </div>
    )
}

export default Intro_to_Python
