import React from "react";

function taskData({courseURL, task}) {
    return(
      <div className={"taskData"}>
          <a id={"returnToCourse"} href={`/courses/${courseURL}/`}>{"<--"} Return to course overview</a>
          <h2 id={"taskTitle"}>{task.title}</h2>
          <p id={"taskDescription"}>{task.description}</p>
          <pre style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily:"Arial, Helvetica, sans-serif"}}>{task.details}</pre>
          {task.hasOwnProperty('previousTask') ?
            <a id={'previousTask'} href={`/courses/${courseURL}/${task.previousTaskURL}`}>Previous: {task.previousTask}</a> : null}
          {task.hasOwnProperty('nextTask') ?
            <a id={'nextTask'} href={`/courses/${courseURL}/${task.nextTaskURL}`}>Next: {task.nextTask}</a> : null}
      </div>
    )

}

export default taskData