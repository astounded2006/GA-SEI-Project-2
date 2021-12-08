import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getAllQuotes } from '../../lib/api'

function RandomQuoteCard() {

  const [quotes, setQuotes] = React.useState(null)
  const [quotesWithId, setQuotesWithId] = React.useState(null)

  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getAllQuotes()
      setQuotes(quoteData.data)
    }
    pullData()
  }, [])

  if (quotes && !quotesWithId) {
    const addQuoteId = 
      quotes.map(quote => {
        if (!quote.author) {
          return { ...quote, author: 'ANON', id: uuidv4() }
        }
        return { ...quote, id: uuidv4() }
      }
      )
    setQuotesWithId(addQuoteId)
  }
  

  
  let randomNumber = 1
  if (quotes) {
    randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(randomNumber)
  }

  console.log('all quotes', quotesWithId)

  return (


    
    <section className="background-three">
      {quotesWithId ? (
        <div className="text-css-three">
          <p className="title">{quotesWithId[randomNumber].text}</p>
          <p className="subtitle">{quotesWithId[randomNumber].author}</p>
        </div>
          
      ) : (
        <p>loading...</p>
      )
      }
    </section>

  )
}

export default RandomQuoteCard