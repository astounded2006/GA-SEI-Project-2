import React from 'react'
import { getAllQuotes } from '../../lib/api'
import Loading from '../common/Loading'
import { v4 as uuidv4 } from 'uuid'


// const chosenQuote='ANON'

function CreateQuoteCard() {

  const [quotes, setQuotes] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')
  const [quotesWithId, setQuotesWithId] = React.useState(null)
  const [chosenQuote, setChosenQuote] = React.useState(null)
  const isLoading = !quotes
  const noSearch = !searchValue && quotesWithId
  const yesSearch = searchValue && quotesWithId
  const clicked = chosenQuote

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

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value)
  }
  // console.log(searchValue)
  const filteredQuotes = (quotes) => {
    console.log('quotes', quotes)
    return quotes?.filter(quote => {
      console.log('quote', quote)
      return (quote.text.toLowerCase().includes(searchValue.toLowerCase()) || 
      quote.author.toLowerCase().includes(searchValue.toLowerCase()))
    })
  }

  const selectedQuotes = (quotesWithId) => {
    return quotesWithId?.filter(quote => {

      return quote.id.includes(chosenQuote.toLowerCase()) 
    })
  }

  const handleClick = (e) => {
    setChosenQuote(e.target.id)
    console.log('here', e.target)
  }

  console.log('click', clicked)

  return (

    <div>
      <section>
        <input className={clicked ? 'search-hidden' : 'input is-large is-rounded'}
          type="text"
          placeholder="Large input"
          onChange={handleSearch} />
      </section>
      <section className="hero quote-card">
        {isLoading && <Loading />}
        <div className="card">
          {noSearch && !clicked &&
      quotesWithId.map(quote => (
        // <Link to="/custom-quote"
        //   key={quote.id} 
        //   chosenquote={chosenQuote}
        // >
        <div className="card-content card-shadow" 
          id={quote.id}
          key={quote.id}
          onClick={handleClick}>
          <p className="title"
            id={quote.id}>
            {quote.text}
          </p>
          <p className="subtitle"
            id={quote.id}>
            {quote.author}
          </p>
        </div>  
        // </Link>
      ))
          }
        </div>
        <div className="card">
          {yesSearch && !clicked && (
            filteredQuotes(quotesWithId).map(quote => (
              <div className="card-content card-shadow" 
                key={quote.id} 
                value={quote.id}
                id={quote.id}
                onClick={handleClick}>
                <p className="title"
                  id={quote.id}>
                  {quote.text}
                </p>
                <p className="subtitle"
                  id={quote.id}>
                  {quote.author}
                </p>
              </div>  
        
            )))
          }
        </div>


        <div className="card">
          {clicked && (
            selectedQuotes(quotesWithId).map(quote => (
              <section className="background"
                key={quote.id} >
                <div className="text-css" 
                  value={quote.id}>
                  <p className="title">
                    {quote.text}
                  </p>
                  <p className="subtitle">
                    {quote.author}
                  </p>
                </div>  
              </section>
            )))
          }
        </div>
      </section></div>

  )

}

export default CreateQuoteCard