import React, {useEffect, useState, useRef} from 'react'
import * as monaco from 'monaco-editor'
import '../styles/taskIDE.css'

function TaskIDE({language, baseCode}) {
    const editorRef = useRef(null)
    const [runtime, setRuntime] = useState(null)
    const [editorConsole, setEditorConsole] = useState(null)
    const [runtimeOutput, setRuntimeOutput] = useState([])
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const editor = document.getElementById('editor-input')
        setEditorConsole(document.getElementById('console'))

        if(!editorRef.current) {
            editorRef.current = monaco.editor.create(editor, {
                value: baseCode,
                language,
                automaticLayout: true,
                readOnly: false,
                minimap: {enabled: false}
            })
        }

        const loadRuntime = async () => {
            if (language === 'python' && !runtime) {
                const pyodideInstance = await window.loadPyodide();
                pyodideInstance.setStdout({
                    batched: (msg) => setRuntimeOutput(prev => [...prev, msg])
                });
                pyodideInstance.setStdin(() => {
                    return new Promise((resolve) => {
                        const handleInput = () => {
                            resolve(inputValue);
                            setInputValue("");
                        };

                        const userInput = window.prompt("Enter input:");
                        if (userInput !== null) {
                            setInputValue(userInput);
                            handleInput();
                        } else {
                            handleInput();
                        }
                    });
                });
                setRuntime(pyodideInstance);
            }
        };

        loadRuntime();

        return () => {
            if(editorRef.current) {
                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    }, [])


    function runCode(){
        const code = editorRef.current.getValue()
        if(!runtime){
            alert(`Error loading ${language} runtime environment, Please refresh the page and try again`)
            return
        }
        switch (language) {
            case 'python':
                executePython(code)
                break
            default:
                alert(`Language ${language} not supported`)
                editorConsole.srcdoc = `<pre style="color: red;">Execution for ${language} is not supported yet.</pre>`;
        }
    }

    async function executePython(code) {
        try{
            setRuntimeOutput([])
            runtime.runPythonAsync(code)
        }catch (error) {
            console.log("Error: ", error);
            editorConsole.srcdoc = `<pre style="color: red;">${error}</pre>`;
        }
    }

    return(
      <div className={"TaskIDE"}>
          <div className={"editor"}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
                  <label>{language.charAt(0).toUpperCase() + language.slice(1)}</label>
                  <button id={"runButton"} onClick={runCode}>Run</button>
              </div>
              <div id={"editor-input"}></div>
          </div>
          <div className={"output"}>
              <label>Output</label>
              <pre id={"console"} style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                    {runtimeOutput.join('\n')}
                </pre>
          </div>
      </div>

    )
}

export default TaskIDE