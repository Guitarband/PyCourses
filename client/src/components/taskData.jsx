import React from "react";

function taskData({title, task}) {
    console.log(title)
    return(
      <div className={"taskData"}>
          <h2 id={"taskTitle"}>{task.title}</h2>
          <p>{task.details}</p>
      </div>
    )

}

export default taskData