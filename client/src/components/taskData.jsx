import React from "react";

function taskData({courseTitle, courseURL, task}) {
    return(
      <div className={"taskData"}>
          <a id={"returnToCourse"} href={`/course/${courseURL}/`}>{"<--"} Return to course overview</a>
          <h2 id={"taskTitle"}>{task.title}</h2>
          <p>{task.details}</p>
          {task.hasOwnProperty('previousTask') ?
            <a id={'previousTask'} href={`/course/${courseURL}/${task.previousTaskURL}`}>Previous: {task.previousTask}</a> : null}
          {task.hasOwnProperty('nextTask') ?
            <a id={'nextTask'} href={`/course/${courseURL}/${task.nextTaskURL}`}>Next: {task.nextTask}</a> : null}
      </div>
    )

}

export default taskData