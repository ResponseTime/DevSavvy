import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw } from "draft-js";
export default function Blog(props) {
  return (
    <div className="App1">
      <Editor
        defaultContentState={props.blog}
        wrapperClassName="wrapper-class1"
        editorClassName="editor-class1"
        toolbarClassName="toolbar-class1"
      />
    </div>
  );
}
