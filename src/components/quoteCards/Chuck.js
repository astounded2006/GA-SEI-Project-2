import React from 'react'

import { getChuckQuotes } from '../../lib/api'

function Chuck() {
  const [chuckQuotes, setChuckQuotes] = React.useState('')
  
  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getChuckQuotes()
      setChuckQuotes(quoteData.data.value)
    }
    pullData()
  }, [])

  
  return (
  
    <div>
      <div className="background-two">
        <p className="title text-css-two">{chuckQuotes} <br/> <span className="sub">Chuck Norris</span></p>
      </div>
    </div>

  )
}
export default Chuck