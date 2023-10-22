import React from 'react';
import ReactDOM from 'react-dom/client';
import RandomQuote from './random-quote/src/Components/RandomQuote/RandomQuote.jsx';
import  MarkdownPreview from './markdown-preview/src/MarkdownPreview.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RandomQuote />
    <MarkdownPreview />
  </React.StrictMode>
);

