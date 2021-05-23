import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const editorOptions = {
  fontSize: '18px',
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  overviewRulerBorder: false,
  hideCursorInOverviewRuler: true,
  renderIndentGuides: false,
  minimap: {
    enabled: false
  },
  selectOnLineNumbers: true,
  wordWrap: 'on',
  scrollbar: {
    horizontal: 'hidden',
    vertical: 'visible',
    verticalHasArrows: false,
    useShadows: false,
    verticalScrollbarSize: 5
  },
  parameterHints: {
    enabled: false
  },
  tabSize: 2,
  hover: false,
  dragAndDrop: true,
  lightbulb: {
    enabled: false
  },
  quickSuggestions: false
};

const Editor = () => {
  const [code, setCode] = useState('console.log(123)');

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={editorOptions}
      onChange={console.log}
    // editorDidMount = {:: this.editorDidMount }
    />
  );
};

export default Editor;
