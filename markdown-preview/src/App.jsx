import { useState } from 'react'
import './App.css'
import { marked } from 'marked'

function App() {
  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
  [title](https://www.google.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  1. List item
  > Blockquote
  ![alt text](image.jpg)
  **bold text**
  `);
  marked.setOptions({
    breaks: true
  })
  //a header # H1 size, a sub header (## H2 size),
  //a link, inline code, a code block,
  //a list item, a blockquote, an image, and bolded text

  return (
    
      <div>
        <textarea id='editor'
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value)
            }}>
        </textarea>
        <div id='preview' 
        dangerouslySetInnerHTML={
          {__html: marked(markdown)}
          }>
        </div>
      </div>

  );
}

export default App
