import React, {useEffect, useRef} from 'react'
import * as monaco from 'monaco-editor'

function WebIDE({language, baseCode}) {
    const editorRef = useRef(null)
    const wsRef = useRef(null)

    useEffect(() => {
        const editor = document.getElementById('editor-input')
        const preview = document.getElementById('editor-preview')

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
            wsRef.current = new WebSocket('ws://localhost:8080')
            wsRef.current.onopen = () => {
                console.log('Connected to server')
            }
        }

        wsRef.current.onmessage = (message) => {
            const data = JSON.parse(message.data)
            if(data.type === 'output'){
                console.log('Output: ', data.output)
            }
        }

        return () => {
            if(editorRef.current) {
                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    })

    function runCode(){
        const code = editorRef.current.getValue()
        wsRef.current.send(JSON.stringify({ type: 'execute', language, code }))
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
        if(result.error) {
            console.error("Error: ", result.error)
            alert("Error: " + result.error)
        }else{
            console.log("Output: ", result.output)
            alert("Output: " + result.output)
        }
    }

    return(
      <div className={"IDE"}>
          <div className={"editor"}>
              <label>Python</label>
              <button onClick={runCode}>Run</button>
              <div id={"editor-input"}></div>
          </div>
          <div className={"output"}>
              <label>Output</label>
              <iframe id={"editor-preview"}></iframe>
          </div>
      </div>

    )
}

export default WebIDE