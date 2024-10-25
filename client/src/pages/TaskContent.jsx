import React from "react";
import TaskIDE from "../components/TaskIDE.jsx";
import TaskData from "../components/taskData.jsx";

function TaskContent({courseTitle, courseURL, task}) {
    return(
      <div className={"CourseContent"}>
          <TaskData courseURL={courseURL} task={task} />
          <TaskIDE language={'python'} baseCode={task.baseCode} />
      </div>
    )

}

export default TaskContent