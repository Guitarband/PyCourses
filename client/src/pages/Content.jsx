import React from "react";
import WebIDE from "../components/WebIDE.jsx";
import TaskData from "../components/taskData.jsx";

function Content({courseTitle, courseURL, task}) {
    return(
      <div className={"CourseContent"}>
          <TaskData courseTitle={courseTitle} courseURL={courseURL} task={task} />
          <WebIDE language={'python'} baseCode={task.baseCode} />
      </div>
    )

}

export default Content