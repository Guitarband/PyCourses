import React, {useEffect, useState, useRef} from 'react'
import * as monaco from 'monaco-editor'
import '../styles/taskIDE.css'
import Alert from "./Alert.jsx";

function TaskIDE({ language, baseCode, fileSystem }) {
    const editorRef = useRef(null)
    const [runtime, setRuntime] = useState(null)
    const [runtimeOutput, setRuntimeOutput] = useState([])
    const [files, setFiles] = useState({'main.py': baseCode})
    const [currentFile, setCurrentFile] = useState('main.py')
    const [alertVisible, setAlertVisible] = useState(false)
    const [alertData, setAlertData] = useState({})
    const [alertExecute, setAlertExecute] = useState(() => {})

    const alertHandler = (data, execute) => {
        setAlertData(data)
        setAlertExecute(() => execute)
        setAlertVisible(true)
    }

    useEffect(() => {
        const editor = document.getElementById('editor-input')

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
                const pyodideInstance = await window.loadPyodide()

                pyodideInstance.setStdout({
                    batched: (msg) => setRuntimeOutput(prev => [...prev, msg])
                });
                pyodideInstance.runPythonAsync('from js import prompt\n' +
                  'def input(p):\n' +
                  '    return p + " " + prompt(f"Python is asking for input \\n \\n {p}")\n' +
                  '__builtins__.input = input')
                setRuntime(pyodideInstance);
                console.log("Runtime loaded");
            }
        };

        loadRuntime();

        return () => {
            if(editorRef.current !== null) {
                const cleanUpPyodide = async () => {
                    for(const filename of Object.keys(files)){
                        if (filename !== 'main.py') {
                            await runtime.runPythonAsync(`import os\nos.remove('${filename}')`)
                        }
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
            alertHandler(
              {
                message: `Error loading ${language} runtime environment, Please refresh the page and try again`,
                type: 'error'
              }
            )
            return
        }

        saveFile()
        setRuntimeOutput([])

        switch (language) {
            case 'python':
                executePython()
                break
            default:
                alertHandler(
                  {
                      message: `Language ${language} not supported`,
                      type: 'error'
                  }
                )
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

        saveFile().then(async () => {
            try {
                for (const [filename, fileContent] of Object.entries(files)) {
                    if (filename !== "main.py" && fileContent.trim()) {
                        if (filename === currentFile) {
                            loadFile(filename, editorRef.current.getValue())
                        } else {
                            loadFile(filename, fileContent)
                        }
                    }
                }

                if (currentFile !== "main.py") {
                    await runtime.runPythonAsync(files['main.py'])
                } else {
                    await runtime.runPythonAsync(editorRef.current.getValue())
                }
            } catch (error) {
                console.log("Error: ", error);
                setRuntimeOutput(prev => [...prev, error.toString()]);
            }
        })
    }

    const createFileHandler = () => {
        alertHandler(
          {
              message: "Create a new file. Please specify the file type.",
              type: 'fileCreate'
          },
            createFile
        )
    }

    const createFile = (fileName) => {
        if (fileName && !files[fileName]) {
            setFiles((prevFiles) => ({
                ...prevFiles,
                [fileName]: "",
            }));
            setCurrentFile(fileName);
            editorRef.current.setValue("");
        } else if (files[fileName]) {
            alertHandler(
              {
                  message: `File ${fileName} already exists`,
                  type: 'error'
              }
            )
        }
    }

    const deleteFileHandler = () => {
        if (currentFile === 'main.py') {
            alertHandler(
              {
                  message: `You can't delete ${currentFile}!`,
                  type: 'error'
              }
            )
        } else if (Object.keys(files).length > 1) {
            alertHandler(
              {
                  message: `Are you sure you want to delete ${currentFile}?`,
                  type: 'fileDelete'
              },
                deleteFile
            )
        } else {
            alertHandler(
              {
                  message: `You can't delete ${currentFile} as it is the last file!`,
                  type: 'error'
              }
            )
        }
    }

    const deleteFile = () => {
        if (currentFile === 'main.py') {
            alertHandler(
              {
                  message: `You can't delete ${currentFile}!`,
                  type: 'error'
              }
            )
        } else if (Object.keys(files).length > 1) {
            const { [currentFile]: _, ...remainingFiles } = files;
            setFiles(remainingFiles);
            const newCurrentFile = Object.keys(remainingFiles)[0];
            setCurrentFile(newCurrentFile);
            editorRef.current.setValue(remainingFiles[newCurrentFile] || "");
        } else {
            alertHandler(
              {
                  message: `You can't delete ${currentFile} as it is the last file!`,
                  type: 'error'
              }
            )
        }
    }

    const switchFile = (fileName) => {
        saveFile().then(() => {
            console.log(files)
            setCurrentFile(fileName);
            editorRef.current.setValue(files[fileName] || "");
        })
    }

    const saveFile = async () => {
        setFiles(prevFiles => ({
            ...prevFiles,
            [currentFile]: editorRef.current.getValue(),
        }))
    }

    return(
      <div className={"TaskIDE"}>
          {alertVisible && (
            <Alert alertData={alertData} setAlertVisible={setAlertVisible} alertExecute={alertExecute} />
          )}
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
                                        createFileHandler();
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
                            <button id={"deleteButton"} onClick={deleteFileHandler}>Delete File</button>
                            <button id={"runButton"} onClick={runCode}>Run</button>
                        </div>
                    </>
                    :
                    <>
                        <h3>{language[0].toUpperCase() + language.slice(1)} Editor</h3>
                        <div>
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