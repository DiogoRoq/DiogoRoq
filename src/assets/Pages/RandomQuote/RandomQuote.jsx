import { useState, useEffect } from 'react'
import './RandomQuote.css'
import reload_icon from './images/reload.png'
import twitter_icon from './images/twitter.png'

const RandomQuote = () => {
  const [quoteList, setQuoteList] = useState([])
  const [quote, setQuote] = useState ({
    'text': 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    'author': 'Thomas Edison'
  });
  useEffect(() => {
    const loadQuote = async () => {
      const response = await fetch('https://type.fit/api/quotes')
      const result = await response.json()
      setQuoteList(
        result.map((x) => {
          return {
            ...x,
            author: x.author.replace('type.fit', '').split(',')[0],
          }
        })
      )
    }
    loadQuote()
  }, [])

  const random = () => {
    const chosenQuote = quoteList[Math.floor(Math.random() * quoteList.length)]

    setQuote(chosenQuote)
  }

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text}- ${quote.author}`
    )
  }

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote">
        {quote.text}
      </div>
      <div id="author" className="author">
        - {quote.author}
      </div>
      <div className="separator"></div>
      <div className="icons">
        <img id='new-quote' src={reload_icon} onClick={() => random()} alt="" />
        <img src={twitter_icon} onClick={() => twitter()} alt="" />
      </div>
    </div>
  )
}

export default RandomQuote
