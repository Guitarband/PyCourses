import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import Content from "../pages/Content.jsx";

function Intro_to_Python() {
    const courseData = {
        name: "Intro to Python",
        url: "intro_to_python",
        description: "Learn the basics of Python programming language",
        tasks: {
            hello_world: {
                title: "Hello World",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                baseCode: "",
                expectedOutput: "Hello World!",
                url: "hello_world",
                nextTask: "Hello World 2",
                nextTaskURL: "hello_world2"
            },
            hello_world2: {
                title: "Hello World2",
                description: "Lets start learning Python with the basics",
                details: "Write a program that prints 'Hello World!'",
                baseCode: "print('Hello World!')",
                url: "hello_world2",
                previousTask: "Hello World",
                previousTaskURL: "hello_world",
                nextTask: "test",
                nextTaskURL: "test"
            }
        }
    }

    return (
      <div className={"Course"}>
          <Routes>
              <Route path={"/"} element={<h2 id={"courseTitle"}>{courseData.name}</h2>}/>
              <Route path={"/hello_world"} element={<Content courseTitle={courseData.name} courseURL={courseData.url} task={courseData.tasks.hello_world}/>}/>
              <Route path={"/hello_world2"} element={<Content courseTitle={courseData.name} courseURL={courseData.url} task={courseData.tasks.hello_world2}/>}/>
          </Routes>
          <Outlet />
          <div className={'taskMap'}>
              {Object.entries(courseData.tasks).map(([key, task]) => (
                <div key={key} className={"taskSlot"}>
                    <a href={`/course/${courseData.url}/${task.url}`}>{task.title}</a>
                    <p className={"taskDescription"}>{task.description}</p>
                </div>
              ))}
          </div>
      </div>
    )
}

export default Intro_to_Python
