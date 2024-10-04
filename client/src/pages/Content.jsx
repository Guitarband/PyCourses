import React from "react";
import WebIDE from "../components/WebIDE.jsx";
import TaskData from "../components/taskData.jsx";

function Content({title, task}) {
    return(
      <div className={"CourseContent"}>
          <TaskData title={title} task={task} />
          <WebIDE language={'python'} baseCode={task.baseCode} />
      </div>
    )

}

export default Content