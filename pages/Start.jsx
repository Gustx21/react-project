import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import File from '../markdown/node.md';

function MarkdownViewer() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(File)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <Markdown>{markdown}</Markdown>
}

export default MarkdownViewer;