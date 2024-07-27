import React, { useEffect, useRef, useState } from 'react'
import AceEditor from  'react-ace'
import "ace-builds/src-min-noconflict/mode-java"
import "ace-builds/src-min-noconflict/mode-c_cpp"
import "ace-builds/src-min-noconflict/mode-python"
import "ace-builds/src-min-noconflict/mode-golang"
import "ace-builds/src-min-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/theme-github"
import "ace-builds/src-min-noconflict/theme-twilight"
import "ace-builds/src-min-noconflict/theme-xcode"
import "ace-builds/src-min-noconflict/ext-language_tools"
import '../styles/EditorComp.css'

function EditorComp(props) {
    const [mode, setMode] = useState("c_cpp");
    const [theme, setTheme] = useState("monokai");
    // const [code, newCode] = useState ({props.code});
    const editorRef = useRef(null);

    useEffect( () => {
        if (editorRef.current && editorRef.current.editor.getValue() !== props.code) {
            editorRef.current.editor.setValue(props.code, 1);
        }
    }, [props.code]);
    
    const handleModeChange=(e)=>{
        setMode(e.target.value);
    }

    const handleThemeChange=(e)=>{
        setTheme(e.target.value);
    }

    const handleCodeChange = (localCode) => {
        // newCode = set (localCode);
        props.onCodeChange (localCode);
    }

  return (
    <div className='editorContainer'>
        <div className='dropdowns'>
            <label>
                Select Language:
                <select value={mode} onChange={handleModeChange}>
                    <option value="c_cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="golang">Go</option>
                </select>
            </label>
            <label>
                Select Theme:
                <select value={theme} onChange={handleThemeChange}>
                    <option value="monokai">Monokai</option>
                    <option value="github">GitHub</option>
                    <option value="twilight">Twlight</option>
                    <option value="xcode">Xcode</option>
                </select>
            </label>
        </div>
        <AceEditor 
            mode={mode}
            theme={theme}
            name={props.roomID}
            placeholder='Collaborate and write your code here...'
            showGutter={true}
            highlightActiveLine={false}
            showPrintMargin={false}
            fontSize={16}
            wrapEnabled={true}
            editorProps={{ $blockScrolling: true}}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true
            }}
            width='100%'
            height='100%'
            className='AceEditor'
            value={props.code}
            onChange={handleCodeChange}
            ref={editorRef}
        />
    </div>
  )
}

export default EditorComp
