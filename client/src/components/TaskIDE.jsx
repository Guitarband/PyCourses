import React, {useEffect, useState, useRef} from 'react'
import * as monaco from 'monaco-editor'
import '../styles/taskIDE.css'

function TaskIDE({language, baseCode, fileSystem}) {
    const editorRef = useRef(null)
    const [runtime, setRuntime] = useState(null)
    const [editorConsole, setEditorConsole] = useState(null)
    const [runtimeOutput, setRuntimeOutput] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [files, setFiles] = useState({'main.py': baseCode})
    const [currentFile, setCurrentFile] = useState('main.py')

    useEffect(() => {
        const editor = document.getElementById('editor-input')
        setEditorConsole(document.getElementById('console'))

        if(!editorRef.current) {
            editorRef.current = monaco.editor.create(editor, {
                value: files[currentFile],
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
                console.log("Runtime loaded");
            }
        };

        loadRuntime();

        return () => {
            if(editorRef.current !== null) {
                const cleanUpPyodide = async () => {
                    for(const filename of Object.keys(files)){
                        await runtime.runPythonAsync(`import os\nos.remove('${filename}')`)
                    }
                }

                cleanUpPyodide()

                editorRef.current.dispose()
                editorRef.current = null
            }
        }
    })


    function runCode(){
        if(!runtime){
            alert(`Error loading ${language} runtime environment, Please refresh the page and try again`)
            return
        }

        saveFile()
        setRuntimeOutput([])

        switch (language) {
            case 'python':
                executePython()
                break
            default:
                alert(`Language ${language} not supported`)
                setRuntimeOutput(["Language not supported"])
        }
    }

    async function executePython() {
        const loadFile = async (filename, fileContent) => {
            await runtime.runPythonAsync(
              `with open('${filename}','w') as f:
    f.write(${JSON.stringify(fileContent)})`
            )
        }

        try{
            for(const [filename, fileContent] of Object.entries(files)){
                if(filename !== "main.py" && fileContent.trim()) {
                    if(filename === currentFile) {
                        loadFile(filename, editorRef.current.getValue())
                    }else {
                        loadFile(filename, fileContent)
                    }
                }
            }

            if(currentFile !== "main.py") {
                await runtime.runPythonAsync(files['main.py'])
            }else{
                await runtime.runPythonAsync(editorRef.current.getValue())
            }
        }catch (error) {
            console.log("Error: ", error);
            setRuntimeOutput(prev => [...prev, error.toString()]);
        }
    }

    const createFile = () => {
        const fileName = prompt("Create a new file. Please specify file extension:");
        if (fileName && !files[fileName]) {
            setFiles((prevFiles) => ({
                ...prevFiles,
                [fileName]: "",
            }));
            setCurrentFile(fileName);
            editorRef.current.setValue("");
        } else if (files[fileName]) {
            alert("File already exists.");
        }
    }

    const deleteFile = () => {
        if (Object.keys(files).length > 1) {
            const confirmDelete = window.confirm(`Are you sure you want to delete ${currentFile}?`);
            if (confirmDelete) {
                const { [currentFile]: _, ...remainingFiles } = files;
                setFiles(remainingFiles);
                const newCurrentFile = Object.keys(remainingFiles)[0];
                setCurrentFile(newCurrentFile);
                editorRef.current.setValue(remainingFiles[newCurrentFile] || "");
            }
        } else {
            alert("You can't delete the last file");
        }
    }

    const switchFile = (fileName) => {
        saveFile()
        setCurrentFile(fileName);
        editorRef.current.setValue(files[fileName] || "");
    }

    const saveFile = () => {
        setFiles(prevFiles => ({
            ...prevFiles,
            [currentFile]: editorRef.current.getValue(),
        }))
    }

    return(
      <div className={"TaskIDE"}>
          <div className={"editor"}>
              <div
                style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                  {fileSystem ?
                    <>
                        <div id={"fileSelectArea"}>
                            <label id={"fileSelectText"}>File:</label>
                            <select id={"fileSelect"} value={currentFile} onChange={
                                (e) => {
                                    if (e.target.value === "new") {
                                        createFile();
                                    } else {
                                        switchFile(e.target.value);
                                    }
                                }
                            }>
                                {Object.keys(files).map(file => (
                                  <option key={file} value={file}>{file}</option>
                                ))}
                                <option value={"new"}>New File</option>
                            </select>
                        </div>
                        <div>
                            <button id={"deleteButton"} onClick={deleteFile}>Delete File</button>
                            <button id={"runButton"} onClick={runCode}>Run</button>
                        </div>
                    </>
                    :
                    <>
                        <h3>{language[0].toUpperCase() + language.slice(1)} Editor</h3>
                        <div>
                            <button id={"deleteButton"} onClick={deleteFile}>Delete File</button>
                            <button id={"runButton"} onClick={runCode}>Run</button>
                        </div>
                    </>
                  }
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