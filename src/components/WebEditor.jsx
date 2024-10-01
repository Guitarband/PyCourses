import React, {useEffect} from 'react'

function WebEditor() {

    useEffect(() => {
        const editor = document.getElementById('editor-input')
        const preview = document.getElementById('editor-preview')

        editor.addEventListener('input', () => {
            preview.srcdoc = editor.value
        })
    })

    return(
      <div className={"editor"}>
          <textarea id={"editor-input"}></textarea>
          <iframe id={"editor-preview"}></iframe>
      </div>
    )
}

export default WebEditor