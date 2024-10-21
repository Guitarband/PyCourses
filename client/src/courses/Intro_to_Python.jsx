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
                nextTask: "Variables",
                nextTaskURL: "variables"
            },
            variables: {
                title: "Variables",
                description: "Here you'll learn the most important aspect of coding, how to store values",
                details: "A variable is a named storage location that contains a certain value."+
                " As the name suggests, the value can change (Unlike a constant which we will look at later)" +
                "Let's try and use a variable to store 'Hello World' and print it out. Change the code so that it prints out 'Hello World'",
                baseCode: "my_string = 'This is an example'" +
                "print(my_string)",
                url: "variables",
                previousTask: "Hello World",
                previousTaskURL: "hello_world",
                nextTask: "Variable Types",
                nextTaskURL: "variable_types"
            },
            variable_types: {
                title: "Variable Types",
                description: "A variable can have many different types. Let's explore a few of them.",
                details: "In python, variables can store different types of data, and every type has unique characteristics. Some common ones inlcude:"+
                "int: Integer" +
                "float: Real numbers"+
                "double: Also stores real numbers, but much more accurate"+
                "str: A String of characters"+
                "bool: True or False values"+ 
                "Let's say we have a variable distance = 4.3. To find the data type of a variable, you can use type(distance), which should output 'float'"+
                "Now that you have an idea of what data types are, try and make your own variable that stores an Integer. Then output the variable and its type. We've started off the code for you",
                baseCode: "my_variable = 12",
                url: "variable_types",
                previousTask: "Variables",
                previousTaskURL: "variables",
                nextTask: "For Loops",
                nextTaskURL: "for_loops"
            },
            for_loops: {
                title: "For Loops",
                description: "Now that we've learned how to use for loops, let's make use of this to print a triangle.",
                details: " In python we have the ability to multiply strings. For example 'a' * 3 would return 'aaa'." +
                  " Using this knowledge, write a program that prints a triangle of height 5.",
                baseCode: "print('*' * 5) # This will print a line of 5 asterisks",
                url: "for_loops",
                previousTask: "Variables",
                previousTaskURL: "variables",
                nextTask: "Make a Triangle",
                nextTaskURL: "make_a_triangle"
            },
            make_a_triangle: {
                title: "Make a Triangle",
                description: "Now that we've learned how to use for loops, let's make use of this to print a triangle.",
                details: " In python we have the ability to multiply strings. For example 'a' * 3 would return 'aaa'." +
                  " Using this knowledge, write a program that prints a triangle of height 5.",
                baseCode: "print('*' * 5) # This will print a line of 5 asterisks",
                url: "make_a_triangle",
                previousTask: "For Loops",
                previousTaskURL: "for_loops",
                nextTask: "test",
                nextTaskURL: "test"
            },
            conditional_statements: {
                title: "Conditional Statements",
                description: ""
            }
        }
    }

    return (
      <div className={"Course"}>
          <Routes>
              <Route path={"/"} element={<h2 id={"courseTitle"}>{courseData.name}</h2>}/>
              {Object.entries(courseData.tasks).map(([key, task]) => (
                <Route key={key} path={'/'+task.url} element={<Content courseTitle={courseData.name} courseURL={courseData.url} task={task}/>}/>
              ))}
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
