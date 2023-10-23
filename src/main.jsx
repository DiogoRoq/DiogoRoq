import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RandomQuote from './assets/Pages/RandomQuote/RandomQuote'
import MarkdownPreview from './assets/Pages/MarkdownPreview/MarkdownPreview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MarkdownPreview />
    <RandomQuote />
  </React.StrictMode>,
)
