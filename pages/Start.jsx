import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import FileNode from '../markdown/node.md';
import FileGit from '../markdown/git.md';
import FileReact from '../markdown/react.md';

function MarkdownViewer() {
  const [MarkdownViewer, setMarkdown] = useState('');

  useEffect(() => {
    fetch(FileNode)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Markdown>{MarkdownViewer}</Markdown>
  )
}

export default MarkdownViewer;