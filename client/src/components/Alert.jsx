import React, { useState } from "react"
import '../styles/alert.css'

const Alert = ({ alertData, setAlertVisible, alertExecute }) => {
    const [fileName, setFileName] = useState('')
    const [inputValue, setInputValue] = useState('')

    return(
      <div className={"alert-overlay"}>
          <div className={"alert-box"}>
              <p>{alertData.message}</p>
              {alertData.type === 'input' && (
                <>
                    <input
                      type={"text"}
                      placeholder={"Enter input"}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button id={"cancelButton"} onClick={() => {
                        setInputValue('')
                        setAlertVisible(false)
                    }}>Cancel</button>
                    <button id={"createButton"} onClick={() => {
                        alertExecute(inputValue)
                        setAlertVisible(false)
                    }}>Create
                    </button>
                </>
              )}
              {alertData.type === 'fileCreate' && (
                <>
                    <input
                      type={"text"}
                      placeholder={"Enter file name"}
                      onChange={(e) => setFileName(e.target.value)}
                    />
                    <button id={"alertCancelButton"} onClick={() => {
                        setFileName('')
                        setAlertVisible(false)
                    }}>Cancel</button>
                    <button id={"alertCreateButton"} onClick={() => {
                        alertExecute(fileName)
                        setAlertVisible(false)
                    }}>Create
                    </button>
                </>
              )}
              {alertData.type === 'fileDelete' && (
                <>
                    <button id={"alertCancelButton"} onClick={() => setAlertVisible(false)}>Cancel</button>
                    <button id={"alertDeleteButton"} onClick={() => {
                        alertExecute()
                        setAlertVisible(false)
                    }}>Delete</button>
                </>
              )}
              {alertData.type === 'error' && (
                <button id={"closeButton"} onClick={() => setAlertVisible(false)}>Close</button>
              )}
          </div>
      </div>
    )
}

export default Alert