import React, {useEffect, useRef} from 'react'
import * as monaco from 'monaco-editor'

function WebIDE({language, baseCode}) {
    const editorRef = useRef(null)
    const wsRef = useRef(null)
    const [awaitingResponse, setAwaitingResponse] = React.useState(false)

    useEffect(() => {
        const editor = document.getElementById('editor-input')
        const editorConsole = document.getElementById('console')

        if(!editorRef.current) {
            editorRef.current = monaco.editor.create(editor, {
                value: baseCode,
                language,
                automaticLayout: true,
                readOnly: false,
                minimap: {enabled: false}
            })
        }


        if(!wsRef.current) {
            wsRef.current = new WebSocket('wss://pycourses.onrender.com/')
            wsRef.current.onopen = () => {
                console.log('Connected to server')
            }

            wsRef.current.onmessage = (message) => {
                setAwaitingResponse(false)
                const data = JSON.parse(message.data)
                if (data.type === 'error'){
                    console.error("Error: ", data)
                    editorConsole.srcdoc = data.error
                } else {
                    console.log(data)
                    let output = data.output.split('\n')[0]
                    editorConsole.srcdoc = output
                }
            }
        }


        return () => {
            if(editorRef.current) {
                editorRef.current.dispose()
                editorRef.current = null
            }
            if(wsRef.current) {
                wsRef.current.close()
                wsRef.current = null
            }
        }
    }, [])

    function runCode(){
        const code = editorRef.current.getValue()
        if(awaitingResponse === false) {
            setAwaitingResponse(true)
            if(wsRef.current) {
                wsRef.current.send(JSON.stringify({language, code, input: null}))
            }else{
                alert("Server not connected")
            }
        }
        else {
            alert("Please wait for the previous code to finish executing")
        }
    }

    async function executePython() {
        let code = editorRef.current.getValue()
        code.replace("\\'", "'")
        code.replace("'", "\\'")
        code.replace("\"", "'")
        console.log(code)
        const response = await fetch('https://pycoursesexecuter.azurewebsites.net/api/ExecutePy?code=wu8uSfDZoNBNKTpl4jMreeHwvqTF7qySNFqG1rgKu4DhAzFutGSyeA%3D%3D', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code
            })
        })

        const result = await response.json()
        const editorConsole = document.getElementById('console')
        if(result.error) {
            console.log("Error: ", result.error)
            editorConsole.srcdoc = result.error
        }else{
            let output = result.output.split('\n')[0]
            console.log("Output: ", result)
            editorConsole.srcdoc = result.output
        }
    }

    return(
      <div className={"IDE"}>
          <div className={"editor"}>
              <label>Python</label>
              <button id={"runButton"} onClick={executePython}>Run</button>
              <div id={"editor-input"}></div>
          </div>
          <div className={"output"}>
              <label>Output</label>
              <iframe id={'console'}></iframe>
          </div>
      </div>

    )
}

export default WebIDE