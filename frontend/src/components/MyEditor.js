import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";

export default function MyEditor(props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  const _contentState = ContentState.createFromText("Sample content state");
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);
  const sendInp = () => {
    props.set(contentState);
  };
  return (
    isMounted && (
      <div className="App">
        <Editor
          defaultContentState={contentState}
          onContentStateChange={setContentState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        <button onClick={sendInp}>click</button>
      </div>
    )
  );
}
